import * as FileSystem from 'expo-file-system';
import * as ImageManipulator from 'expo-image-manipulator';

export const convertToJPEG = async (uri: string) => {
  const manipResult = await ImageManipulator.manipulateAsync(
    uri,
    [],
    { compress: 1, format: ImageManipulator.SaveFormat.JPEG }
  );
  
  return manipResult.uri;
};

export const getBase64 = async (uri: string) => {
  const fileBase64 = await FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.Base64 });
  return fileBase64;
};