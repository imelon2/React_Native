/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';

class DrawerHomeScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Home Screnn</Text>
        <Button
          title="To User Screen"
          onPress={() => {
            this.props.navigation.navigate('User')
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default DrawerHomeScreen;
