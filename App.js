import React from 'react';

//Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SCREEN_VIEWS } from "./global/definitions"

//Providers
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
import MultimediaView from './src/views/multimedia';
import PostView from './src/views/post view';
import { SecurityHandler, ErrorHandler, ObjectEvaluate } from "./functions"
import CryptoJS from 'crypto-js'

//Hooks
import { UserProvider } from './src/provider/userProvider';
import CameraView from './src/views/camera';

const Stack = createStackNavigator();

export default function App() {
  return (
    <DesignProvider>
      <UserProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown:false
            }}
            initialRouteName={SCREEN_VIEWS.LOAD_VIEW} 
          >
            <Stack.Screen 
              name={ SCREEN_VIEWS.LOAD_VIEW }
              component={Load}
            />
            <Stack.Screen
              name={ SCREEN_VIEWS.LANDING_VIEW }
              component={Landing}
            />
            <Stack.Screen
              name={ SCREEN_VIEWS.REGISTER_VIEW }
              component={Register}
            />
            <Stack.Screen
              name={ SCREEN_VIEWS.LOGIN_VIEW }
              component={Login}
            />
            <Stack.Screen
              name={ SCREEN_VIEWS.HOME_VIEW }
              component={Home}
            />
            <Stack.Screen
              name={ SCREEN_VIEWS.POST_CREATE }
              component={Post}
            />
            <Stack.Screen
              name={ SCREEN_VIEWS.CONFIGURATION_VIEW }
              component={Configuration}
            />
            <Stack.Screen
              name={ SCREEN_VIEWS.CHAT_LIST_VIEW }
              component={ChatsSelectorView}
            />
            <Stack.Screen
              name={ SCREEN_VIEWS.CHAT_VIEW }
              component={Chat}
            />
            <Stack.Screen
              name={ SCREEN_VIEWS.USER_PROFILE_VIEW }
              component={UserProfile}
            />
            <Stack.Screen
              name={ SCREEN_VIEWS.MULTIMEDIA }
              component={ MultimediaView }
            />
            <Stack.Screen
              name={ SCREEN_VIEWS.POST_VIEW }
              component={ PostView }
            />
            <Stack.Screen
              name={ SCREEN_VIEWS.CAMERA_TAKE }
              component={ CameraView }
            />
          </Stack.Navigator>
        </NavigationContainer>
      </UserProvider>
    </DesignProvider>
  );
}