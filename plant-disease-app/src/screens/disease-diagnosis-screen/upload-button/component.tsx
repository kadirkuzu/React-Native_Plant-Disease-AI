import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker'; 
import { useActionSheet } from '@expo/react-native-action-sheet';
import { Styles } from './styles';
import { ThemeColors } from '../../../assets/variables/colors';

export const UploadButton = ({ onImageSelected }: { onImageSelected: (uri: string) => void }) => {
  const { showActionSheetWithOptions } = useActionSheet();

  const handleCamera = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();

    if (permission.granted) {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ['images'],
        quality: 1,
        base64: true
      });

      if (!result.canceled && result.assets) {
        const imageUri = result.assets[0].base64;
        onImageSelected(imageUri ?? '');
      }
    }
  };

  const handleGallery = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permission.granted) {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        quality: 1,
        base64: true
      });
      if (!result.canceled && result.assets) {
        const imageUri = result.assets[0].base64;
        onImageSelected(imageUri ?? '');
      }
    }
  };

  const openActionSheet = () => {
    const options = ['Take Photo', 'Choose from Gallery', 'Cancel'];
    const cancelButtonIndex = 2;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        tintColor: ThemeColors.gray
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          handleCamera();
        } else if (buttonIndex === 1) {
          handleGallery();
        }
      }
    );
  };

  return (
    <View style={Styles.container}>
      <TouchableOpacity style={Styles.uploadButton} onPress={openActionSheet}>
        <FontAwesome name="upload" size={24} color="white" style={Styles.icon} />
        <Text style={Styles.uploadButtonText}>Upload</Text>
      </TouchableOpacity>
    </View>
  );
};