import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationType } from '../../navigation/params';
import { UploadButton } from './upload-button/component';
import { Routes } from '../../navigation/routes';
import { Styles } from './styles';
import Icon from '@expo/vector-icons/FontAwesome';

export const DiseaseDiagnosisScreen = () => {
  const navigation = useNavigation<NavigationType>();
  const [imageUri, setImageUri] = useState<string | null>(null);

  const handleImageSelected = (uri: string) => {
    setImageUri(uri);
  };

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
          onPress={() => navigation.navigate(Routes.Result, { imageUri, result: 'Your plant is healthy! No disease detected.' })}
        >
          <Icon name="arrow-right" size={20} color="#FFF" style={Styles.proceedIcon} />
          <Text style={Styles.proceedText}>Proceed with Diagnosis</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
