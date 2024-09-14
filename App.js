import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import React, { useState } from "react";
import { TextInput, View, Dimensions, Image, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import Categories from './src/pages/Categories';
import Meals from './src/pages/Meals';
import MealsDetails from './src/pages/MealsDetails';

const Stack = createStackNavigator();

function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={Categories} options={{
          title:"Categories",
          headerTitleAlign: 'center',
          headerTintColor: '#FFA500',
          headerTitleStyle: {
          }
        }}/>
        <Stack.Screen name="Meals" component={Meals} options={{
          headerTitleAlign: 'center',
          headerTintColor: '#FFA500',
          headerBackTitleVisible: true,
        }}/>
        <Stack.Screen name="Detail" component={MealsDetails} options={{
          headerTitleAlign: 'center',
          headerTintColor: '#FFA500',
          headerBackTitleVisible: true,
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({

});
export default App;
