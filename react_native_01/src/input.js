/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

class Input extends Component {
  state = {
    myTextInput: '입력하세욧!',
  };

  onChangeInput = (event) => {
    this.setState({
      myTextInput: event,
    });
  };
  render() {
    return (
      <View style={styles.mainView}>
        <TextInput
          style={styles.input}
          value={this.state.myTextInput}
          onChangeText={this.onChangeInput}
          multiline={true}
          maxLength={100}
          autoCapitalize={'none'}
          editable={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
  },
  input: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop: 20,
    fontSize: 25,
    padding: 10,
  },
});

export default Input;
