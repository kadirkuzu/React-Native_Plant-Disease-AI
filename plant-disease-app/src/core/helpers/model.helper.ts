import * as tf from '@tensorflow/tfjs';
import { decodeJpeg } from '@tensorflow/tfjs-react-native';
import { labels } from '../../../assets/labels';

export const base64ToTensor = async (base64: string) => {
    const rawImageData = tf.util.encodeString(base64, 'base64').buffer;
    const uint8array = new Uint8Array(rawImageData);

    const imageTensor = decodeJpeg(uint8array);

    const resized = tf.image.resizeBilinear(imageTensor, [224, 224]);
    const normalized = resized.div(255);
    const batched = normalized.expandDims(0);

    return batched;
};

export const getDataFromOutput = (output: number[]) => {
    const outputArray = Array.from(output); // TypedArray -> normal array
    const maxIndex = outputArray.indexOf(Math.max(...outputArray));
    const label = labels[maxIndex];
    const probability = (outputArray[maxIndex] * 100).toFixed(2); // yüzde olarak
  
    return {
      label,
      probability: `${probability}%`
    };
  };