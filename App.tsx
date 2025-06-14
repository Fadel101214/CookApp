import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Plats" component={HomeScreen} />
        <Stack.Screen name="Détails du Plat" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
