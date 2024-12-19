import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Routes } from '../../navigation/routes';
import { NavigationType, ResultRouteProp } from '../../navigation/params';
import { Styles } from './styles';

export const ResultScreen = () => {
  const route = useRoute<ResultRouteProp>();
  const { imageUri, result } = route.params;

  const navigation = useNavigation<NavigationType>();

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Diagnosis Result</Text>
      {imageUri && (
        <Image source={{ uri: imageUri }} style={Styles.image} />
      )}

      <Text style={Styles.resultText}>{result}</Text>

      <Button title="Show History" onPress={() => navigation.navigate(Routes.History)} />
    </View>
  );
};