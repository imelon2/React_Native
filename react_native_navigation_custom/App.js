/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import 'react-native-gesture-handler';
 import React, {Component} from 'react';
 import {StyleSheet, View, Text, Button, Image, Linking} from 'react-native';
 import {NavigationContainer} from '@react-navigation/native';
 import {createNativeStackNavigator} from '@react-navigation/native-stack';
 import {
   createDrawerNavigator,
   DrawerContentScrollView,
   DrawerItemList,
   DrawerItem,
 } from '@react-navigation/drawer';

class App extends Component {
  render() {
    return (
      <View>
        <Text>hi</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({

});

export default App;
