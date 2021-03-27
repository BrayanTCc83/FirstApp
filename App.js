
import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { DesignProvider } from "./src/provider/designProvider"

//Views
import Load from './src/views/load';
import Chat from './src/views/chat';
import ChatsSelectorView from './src/views/chatList';
import Configuration from './src/views/configuration';
import Home from './src/views/home';
import Landing from './src/views/landing';
import Login from './src/views/login';
import Register from './src/views/register';
import UserProfile from './src/views/userProfile';
import Post from './src/views/post';

const Stack = createStackNavigator();

export default function App() {
  return (
    <DesignProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown:false
          }}
          initialRouteName="Landing"
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