import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Alert, } from 'react-native';
import { Styles } from './styles';

const mockHistoryData = [
    {
        id: '1',
        imageUri: 'https://c.pxhere.com/photos/17/6b/autumn_blur_canada_daylight_depth_of_field_fall_flora_focus-1548847.jpg!d', // Replace with real URIs
        result: 'Healthy plant',
        date: '2024-12-01',
    },
    {
        id: '2',
        imageUri: 'https://c.pxhere.com/photos/17/6b/autumn_blur_canada_daylight_depth_of_field_fall_flora_focus-1548847.jpg!d', // Replace with real URIs
        result: 'Powdery Mildew Detected',
        date: '2024-12-02',
    },
    {
        id: '3',
        imageUri: 'https://c.pxhere.com/photos/17/6b/autumn_blur_canada_daylight_depth_of_field_fall_flora_focus-1548847.jpg!d', // Replace with real URIs
        result: 'Black Spot Disease Detected',
        date: '2024-12-03',
    },
];

export const HistoryScreen = () => {
    const handlePreview = (imageUri: string, result: string) => {
        Alert.alert('Diagnosis Result', `${result}`, [
            { text: 'Close', style: 'cancel' },
        ]);
    };

    return (
        <View style={Styles.container}>
            <Text style={Styles.description}>
                Here you can find the list of your previous diagnoses.
            </Text>

            <FlatList
                data={mockHistoryData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={Styles.historyItem}
                        onPress={() => handlePreview(item.imageUri, item.result)}
                    >
                        <Image source={{ uri: item.imageUri }} style={Styles.historyImage} />
                        <View style={Styles.historyTextContainer}>
                            <Text style={Styles.resultText}>{item.result}</Text>
                            <Text style={Styles.dateText}>{item.date}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                contentContainerStyle={Styles.listContainer}
            />
        </View>
    );
};
