/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {Component} from 'react';
 import {StyleSheet, View, Text, Button, Image, Linking} from 'react-native';


 class TabHomeScreen extends Component {
   render() {
     return (
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        }}>
            <Text>Hello world</Text>
        </View>
     );
   }
 }
 const styles = StyleSheet.create({});
 
 export default TabHomeScreen;
 