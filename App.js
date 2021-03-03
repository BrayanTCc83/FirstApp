//React
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Navigations
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Providers
import { AplicationProvider, useAplicationContext } from "./src/provider"

//Views
import Home from "./src/views/home"

const Stack = createStackNavigator();

export default function App() {
  const appTheme = {theme:'',color:''}
  return (
    <AplicationProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title:'Welcome'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AplicationProvider>
  );
}