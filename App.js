import { StatusBar } from 'expo-status-bar';
import AppNavigation from './src/navigation';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <AppNavigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
