/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import PictogramHome from './assets/pics/home.png';

class DrawerUserScreen extends Component {
  drawerStyle = () => {
    this.props.navigation.setOptions({
      drawerIcon: () => {
        <Image source={PictogramHome} style={{width: 40, height: 40}} />;
      },
    });
  };
  render() {
    this.drawerStyle();
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>user Screnn</Text>
        <Button
          title="To Home Screen"
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default DrawerUserScreen;
