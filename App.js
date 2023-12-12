import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import TodoScreens from './src/Screens/TodoScreens';

export default function App() {
  return (
    <SafeAreaView style={{marginTop:40,}}>
    <View>
      <TodoScreens />
    </View>
    </SafeAreaView> 
  );
}

const styles = StyleSheet.create({});
