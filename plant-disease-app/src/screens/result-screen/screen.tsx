import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NavigationType, ResultRouteProp } from '../../navigation/params';
import { Routes } from '../../navigation/routes';
import { Ionicons } from '@expo/vector-icons';
import { Styles } from './styles';

export const ResultScreen = () => {
  const navigation = useNavigation<NavigationType>();
  const route = useRoute<ResultRouteProp>();
  const { imageUri, data } = route.params;

  const { label, probability, isHealty } = data;

  return (
    <SafeAreaView style={Styles.screen} >
      <ScrollView contentContainerStyle={Styles.scrollView}>
        <View style={Styles.container}>
          <View style={Styles.statusRow}>
            <Ionicons
              name={isHealty ? 'leaf' : 'bug'}
              size={50}
              color={isHealty ? '#4CAF50' : '#FF5252'}
            />
            <Text style={[Styles.resultText, { color: isHealty ? '#4CAF50' : '#FF5252' }]}>
              {isHealty ? 'Healthy' : 'Unhealthy'}
            </Text>
          </View>

          {imageUri && <Image source={{ uri: `data:image/png;base64,${imageUri}`}} style={Styles.image} />}

          <Text style={Styles.detailLine}>
            <Text style={Styles.label}>{label}</Text> · <Text style={Styles.probability}>{probability}</Text>
          </Text>
        </View>

        <View style={Styles.buttonGroup}>
          <TouchableOpacity
            onPress={() => navigation.navigate(Routes.DiseaseDiagnosis)}
            style={[Styles.button, { backgroundColor: '#007AFF' }]}
          >
            <Text style={[Styles.buttonText, { color: '#fff' }]}>Another Test</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate(Routes.History)}
            style={Styles.button}
          >
            <Text style={Styles.buttonText}>Show History</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>

  );
};