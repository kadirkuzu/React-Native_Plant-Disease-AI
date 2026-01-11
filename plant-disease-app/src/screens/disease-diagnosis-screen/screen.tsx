import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationType } from '../../navigation/params';
import { UploadButton } from './upload-button/component';
import { Routes } from '../../navigation/routes';
import { Styles } from './styles';
import Icon from '@expo/vector-icons/FontAwesome';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';
import { bundleResourceIO } from '@tensorflow/tfjs-react-native';
import { imageToTensor, getDataFromOutput } from '../../core/helpers/model.helper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const DiseaseDiagnosisScreen = () => {
  const navigation = useNavigation<NavigationType>();
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [isTfReady, setIsTfReady] = useState(false);
  const [isLoading, setIsLoading] = useState(null as any);

  const handleImageSelected = (uri: string) => {
    setImageUri(uri);
  };

  useEffect(() => {
    async function loadTf() {
      await tf.ready();
      setIsTfReady(true);
    }
    loadTf();
  }, []);

  const addData = async (data: {probability: string, label: string, isHealty: boolean}, base64: string) => {
    const formattedDate = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).format(new Date());

    const historyItem = {
      imageUri: base64,
      label: data.label,
      date: formattedDate,
      probability: data.probability,
      isHealty: data.isHealty
    };

    const existingHistory = await AsyncStorage.getItem('historyData');
    const parsedHistory = existingHistory ? JSON.parse(existingHistory) : [];
    parsedHistory.unshift(historyItem);
    await AsyncStorage.setItem('historyData', JSON.stringify(parsedHistory));
  }

  const runModel = async () => {
    try {
      setIsLoading(true)
      const modelJson = require('../../../assets/model.json');
      const modelWeights = [
        require('../../../assets/group1-shard1of2.bin'),
        require('../../../assets/group1-shard2of2.bin'),
      ];
      const model = await tf.loadGraphModel(bundleResourceIO(modelJson, modelWeights));
      const inputTensor = await imageToTensor(imageUri!)
      const prediction = model.predict(inputTensor.batched) as tf.Tensor;
      const output = await prediction.data();
  
      const data = getDataFromOutput(Array.from(output))
  
      setIsLoading(false)
      setImageUri('')

      await addData(data,inputTensor.base64)
      
      navigation.navigate(Routes.Result, { imageUri: inputTensor.base64, data})

    } catch (error) {
      setIsLoading(false)
    }
  };

  return (
    <View style={Styles.container}>

      <UploadButton onImageSelected={handleImageSelected} />

      <Text style={Styles.description}>
        Upload a photo of your plant for diagnosis.
      </Text>


      {imageUri && (
        <View style={Styles.imageContainer}>
          <Image source={{ uri: imageUri}} style={Styles.image} />
        </View>
      )}

      {imageUri && (
        <TouchableOpacity
          style={Styles.proceedButton}
          onPress={runModel}
          disabled={isLoading}
        >
          <Icon name="arrow-right" size={20} color="#FFF" style={Styles.proceedIcon} />
          <Text style={Styles.proceedText}>Proceed with Diagnosis</Text>
          { isLoading && <ActivityIndicator color={'white'} style={{marginLeft: 20}} /> } 
        </TouchableOpacity>
      )}
    </View>
  );
};
