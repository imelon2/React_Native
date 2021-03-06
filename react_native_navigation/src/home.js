/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

class HomeScreen extends Component {
  render() {
    return (
      <View style={{
          flex:1,
          alignItems: 'center',
          justifyContent:'center'
      }}>
        <Text>Home Screen</Text>
        <Button
            title='To User Screen'
            onPress={()=> {
                this.props.navigation.navigate('User')
            }}
        />
        <Button
          title='Change the title'
          onPress={()=> this.props.navigation.setOptions({
            title: 'Changed!',
            headerStyle: {
              backgroundColor: 'pink'
            },
            headerTintColor: 'red'
          })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default HomeScreen;
