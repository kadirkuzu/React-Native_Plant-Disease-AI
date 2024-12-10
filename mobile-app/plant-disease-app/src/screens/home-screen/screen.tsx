import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationType } from '../../navigation/params';
import { Ionicons } from '@expo/vector-icons';
import { Routes } from '../../navigation/routes';
import { Styles } from './styles';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationType>();

  return (
    <ScrollView contentContainerStyle={Styles.container}>
      <Text style={Styles.title}>Welcome to Plant AI</Text>
      <Text style={Styles.description}>
        Your companion in diagnosing plant health and keeping your greenery thriving.
      </Text>

      <View style={Styles.featuresContainer}>
        <Text style={Styles.featuresTitle}>Key Features</Text>
        <View style={Styles.featureItem}>
          <Ionicons name="leaf-outline" size={30} color="#333" />
          <Text style={Styles.featureText}>Diagnose plant diseases with AI</Text>
        </View>
        <View style={Styles.featureItem}>
          <Ionicons name="camera-outline" size={30} color="#333" />
          <Text style={Styles.featureText}>Upload plant images directly</Text>
        </View>
        <View style={Styles.featureItem}>
          <Ionicons name="book-outline" size={30} color="#333" />
          <Text style={Styles.featureText}>Learn about plant care tips</Text>
        </View>
        <View style={Styles.featureItem}>
          <Ionicons name="time-outline" size={30} color="#333" />
          <Text style={Styles.featureText}>Access your diagnosis history</Text>
        </View>
      </View>

      <View style={Styles.navigationContainer}>
        <TouchableOpacity
          style={Styles.navButton}
          onPress={() => navigation.navigate(Routes.DiseaseDiagnosis)}
        >
          <Ionicons name="search-outline" size={24} color="#fff" />
          <Text style={Styles.navButtonText}>Start Diagnosis</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={Styles.navButton}
          onPress={() => navigation.navigate(Routes.History)}
        >
          <Ionicons name="time-outline" size={24} color="#fff" />
          <Text style={Styles.navButtonText}>View History</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
