import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Styles } from './styles';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Routes } from '../../navigation/routes';
import { NavigationType } from '../../navigation/params';

interface HistoryItem {
    imageUri: string;
    label: string;
    date: string;
    probability: string;
    isHealty: boolean
}

export const HistoryScreen = () => {
    const [historyData, setHistoryData] = useState<HistoryItem[]>([]);
    const navigation = useNavigation<NavigationType>();

    useFocusEffect(
        React.useCallback(() => {
            const fetchHistoryData = async () => {
                const storedData = await AsyncStorage.getItem('historyData');
                if (storedData) {
                    const parsedData: HistoryItem[] = JSON.parse(storedData);
                    setHistoryData(parsedData);
                }
            };

            fetchHistoryData();
        }, [])
    );


    const handlePreview = (imageUri: string, data: HistoryItem) => {
        navigation.navigate(Routes.Result, { imageUri, data })
    };

    return (
        <View style={Styles.container}>
            <Text style={Styles.description}>
                Here you can find the list of your previous diagnoses.
            </Text>

            <FlatList
                data={historyData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={Styles.historyItem}
                        onPress={() => handlePreview(item.imageUri, item)}
                    >
                        <Image
                            source={{ uri: `data:image/png;base64,${item.imageUri}` }}
                            style={Styles.historyImage}
                        />
                        <View style={Styles.historyTextContainer}>
                            <Text style={Styles.resultText}>{item.label}</Text>
                            <Text style={Styles.dateText}>{item.date}</Text>
                            <Text style={Styles.probabilityText}>Probability: {item.probability}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                contentContainerStyle={Styles.listContainer}
            />
        </View>
    );
};