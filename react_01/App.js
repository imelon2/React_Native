/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropsChild from './propsChild';

class App extends Component {

  state = {
    sampleText: 'Hellow World',
    sampleBoolean : false,
    sampleNum : 1
  }

  inputText = () => {
    return (

      this.state.sampleBoolean ?
      <Text> sampleBoolean is true</Text>
      :
      <Text> sampleBoolean is false</Text>
      )
    }

    changeState = () => {
        if (!this.state.sampleBoolean) {
          this.setState({
            sampleText: "Text Change!!!!!",
            sampleBoolean:true
          })
        } else {
          this.setState({
            sampleText: "Hellow World",
            sampleBoolean:false
          })
        }
    }

    onAdd = () => {
      this.setState(prevState => {
        return {
          sampleNum : prevState.sampleNum + 1
        }
      })
    }

  render() {
    return (
      <View style={styles.background}>
        <PropsChild sampleText={this.state.sampleText} changeState={this.changeState}></PropsChild>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  background : {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App;
