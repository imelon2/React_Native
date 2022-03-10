/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler'
 import React, {Component, useEffect} from 'react';
 import {StyleSheet, View, Text, Button, Image, Linking, Alert } from 'react-native';
 import {NavigationContainer} from '@react-navigation/native';
 import {createNativeStackNavigator} from '@react-navigation/native-stack';
 import {
   createDrawerNavigator,
   DrawerContentScrollView,
   DrawerItemList,
   DrawerItem,
 } from '@react-navigation/drawer';
import ChatBotScreen from './src/chatBot';
import MainScreen from './src/main';


const Drawer = createDrawerNavigator();

class App extends Component {
  render() {

    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='ChatBotScreen'>
          {/* <Drawer.Screen 
            name='Main'
            component={MainScreen}
          /> */}
          <Drawer.Screen
            name='ChatBotScreen'
            component={ChatBotScreen}
            options={{
              title:'채팅상담'
            }}
          />
          {/* <Drawer.Screen/> */}
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}


const styles = StyleSheet.create({

});

export default App;
