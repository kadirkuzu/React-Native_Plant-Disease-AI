import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationType } from '../../navigation/params';
import { UploadButton } from './upload-button/component';
import { Routes } from '../../navigation/routes';
import { Styles } from './styles';
import Icon from '@expo/vector-icons/FontAwesome';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';
import { bundleResourceIO } from '@tensorflow/tfjs-react-native';
import { base64ToTensor, getDataFromOutput } from '../../core/helpers/model.helper';

export const DiseaseDiagnosisScreen = () => {
  const navigation = useNavigation<NavigationType>();
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [isTfReady, setIsTfReady] = useState(false);
  const [prediction, setPrediction] = useState(null as any);

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


  const runModel = async () => {
    const modelJson = require('../../../assets/model.json');
    const modelWeights = [
      require('../../../assets/group1-shard1of2.bin'),
      require('../../../assets/group1-shard2of2.bin'),
    ];
    const model = await tf.loadGraphModel(bundleResourceIO(modelJson, modelWeights));
    const inputTensor = await base64ToTensor(imageUri!)
    const prediction = model.predict(inputTensor!) as tf.Tensor;
    const output = await prediction.data();


    console.error('output :' + getDataFromOutput(output as any).label)
    console.error('probability :' + getDataFromOutput(output as any).probability)
  
    return output;
  };

  // navigation.navigate(Routes.Result, { imageUri, result: 'Your plant is healthy! No disease detected.' })

  return (
    <View style={Styles.container}>

      <UploadButton onImageSelected={handleImageSelected} />

      <Text style={Styles.description}>
        Upload a photo of your plant for diagnosis.
      </Text>


      {imageUri && (
        <View style={Styles.imageContainer}>
          <Image source={{ uri: `data:image/jpeg;base64,${imageUri}` }} style={Styles.image} />
        </View>
      )}

      {imageUri && (
        <TouchableOpacity
          style={Styles.proceedButton}
          onPress={runModel}
        >
          <Icon name="arrow-right" size={20} color="#FFF" style={Styles.proceedIcon} />
          <Text style={Styles.proceedText}>Proceed with Diagnosis</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
