import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNavigationContainerRef, NavigationContainer } from "@react-navigation/native";
import { Routes } from "./routes";
import { HomeScreen } from "../screens/home-screen/screen";
import { HistoryScreen } from "../screens/history-screen/screen";
import { DiseaseDiagnosisScreen } from "../screens/disease-diagnosis-screen/screen";
import { ResultScreen } from "../screens/result-screen/screen";
import { RootStackParamList } from "./params";
import { ThemeColors } from "../assets/variables/colors";
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator<RootStackParamList>();

export const navigationRef = createNavigationContainerRef();

const Icon = (color:string,size:number,icon:keyof typeof Ionicons.glyphMap) => {
  return (
    <Ionicons name={icon} color={color} size={size} />
  )
}

export const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Drawer.Navigator screenOptions={{
        headerStyle: {
          backgroundColor : ThemeColors.black
        },
        headerTintColor: ThemeColors.white,
        drawerStyle: {
          backgroundColor: ThemeColors.gray,
        },
        drawerActiveTintColor: ThemeColors.black,
        drawerActiveBackgroundColor: ThemeColors.white,
        drawerInactiveTintColor: ThemeColors.white
      }}>
        <Drawer.Screen name={Routes.Home} component={HomeScreen} options={{drawerIcon: ({color,size})=>Icon(color,size,'home-outline')}} />
        <Drawer.Screen name={Routes.DiseaseDiagnosis} component={DiseaseDiagnosisScreen} options={{drawerIcon: ({color,size})=>Icon(color,size,'leaf-outline')}} />
        <Drawer.Screen name={Routes.Result} component={ResultScreen} options={{drawerItemStyle:{display: 'none'}}} />
        <Drawer.Screen name={Routes.History} component={HistoryScreen} options={{drawerIcon: ({color,size})=>Icon(color,size,'time-outline')}} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};