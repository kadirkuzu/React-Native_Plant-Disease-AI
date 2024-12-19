import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { Navigation } from './src/navigation';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <ActionSheetProvider>
      <>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <Navigation />
      </>
    </ActionSheetProvider>
  );
}