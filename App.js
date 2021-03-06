//React
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Navigations
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Providers
import { DesignProvider } from "./src/provider/designProvider"

//Views
import Load from "./src/views/load"
import Landing from "./src/views/landing"
import Register from "./src/views/register"
import Login from "./src/views/login"
import Home from "./src/views/home"
import Post from "./src/views/post"
import Configuration from "./src/views/configuration"
import ChatsSelectorView from "./src/views/chatList"
import Chat from "./src/views/chat"
import UserProfile from "./src/views/userProfile"

const Stack = createStackNavigator();

export default function App() {
  return (
    <DesignProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown:false
          }}
          initialRouteName="Home"
        >
          <Stack.Screen 
            name="Load"
            component={Load}
          />
          <Stack.Screen
            name="Landing"
            component={Landing}
          />
          <Stack.Screen
            name="Register"
            component={Register}
          />
          <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="Post"
            component={Post}
          />
          <Stack.Screen
            name="Configuration"
            component={Configuration}
          />
          <Stack.Screen
            name="ChatsSelectorView"
            component={ChatsSelectorView}
          />
          <Stack.Screen
            name="Chat"
            component={Chat}
          />
          <Stack.Screen
            name="UserProfile"
            component={UserProfile}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </DesignProvider>
  );
}