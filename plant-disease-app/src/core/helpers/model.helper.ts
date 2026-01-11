import * as tf from '@tensorflow/tfjs';
import { decodeJpeg } from '@tensorflow/tfjs-react-native';
import { labels } from '../../../assets/labels';
import { convertToJPEG, getBase64 } from './file.helper';

export const imageToTensor = async (uri: string) => {
  const jpegUri = await convertToJPEG(uri)
  const base64 = await getBase64(jpegUri)

  const rawImageData = tf.util.encodeString(base64, 'base64').buffer;
  const uint8array = new Uint8Array(rawImageData);

  const imageTensor = decodeJpeg(uint8array);

  const resized = tf.image.resizeBilinear(imageTensor, [224, 224]);
  const normalized = resized.div(255);
  const batched = normalized.expandDims(0);

  return {batched, base64};
};

export const getDataFromOutput = (outputArray: number[]) => {
  const maxIndex = outputArray.indexOf(Math.max(...outputArray));
  const data = labels[maxIndex];
  const probability = Math.floor(outputArray[maxIndex] * 100) 

  return {
    ...data,
    probability: `${probability}%`
  };
};