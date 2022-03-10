/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {Component} from 'react';
 import {StyleSheet, View, Text, Button } from 'react-native';
 import localNotification from '../util/localNotification';

 class MainScreen extends Component {
//render 되기 전 실행
  componentWillUnmount() {
    localNotification.unregister();
  }
// render 된 후 실행
  componentDidMount() {
    localNotification.register();
  }
   render() {
     return (
        <View style={{
            flex:1,
            alignItems: 'center',
            justifyContent:'center'
        }}>
          <Text>ChatBot Screen</Text>
        </View>
     );
   }
 }
 
 const styles = StyleSheet.create({});
 
 export default MainScreen;
 