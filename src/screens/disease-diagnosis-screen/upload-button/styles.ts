import { StyleSheet } from "react-native";
import { ThemeColors } from "../../../assets/variables/colors";

export const Styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    uploadButton: {
        flexDirection: 'row',
        backgroundColor: '#1C1C1C',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 30,
        alignItems: 'center',
    },
    uploadButtonText: {
        fontSize: 18,
        color: ThemeColors.white,
        marginLeft: 10,
    },
    icon: {
        marginRight: 10,
    },
    imageContainer: {
        marginTop: 30,
        alignItems: 'center',
    },
    imageText: {
        fontSize: 16,
        color: ThemeColors.black,
        marginTop: 10,
    },
});