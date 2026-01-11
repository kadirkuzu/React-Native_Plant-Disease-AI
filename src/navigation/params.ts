import { RouteProp } from "@react-navigation/native";
import { Routes } from "./routes";
import { DrawerNavigationProp } from '@react-navigation/drawer';

export type RootStackParamList = {
    [Routes.Home]: undefined;
    [Routes.DiseaseDiagnosis]: undefined;
    [Routes.Result]: {imageUri: string, data: { probability: string, label: string, isHealty: boolean}};
    [Routes.History]: undefined;
};

export type NavigationType = DrawerNavigationProp<RootStackParamList>;

export type ResultRouteProp = RouteProp<RootStackParamList, typeof Routes.Result>