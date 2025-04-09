import * as FileSystem from 'expo-file-system';
import * as ImageManipulator from 'expo-image-manipulator';

export function base64ToUint8Array(base64: string): Uint8Array {
  const binary = atob(base64);
  const array = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    array[i] = binary.charCodeAt(i);
  }
  return array;
}

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