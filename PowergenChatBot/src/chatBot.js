/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, AppState} from 'react-native';
import localNotification from '../util/localNotification';
import {WebView} from 'react-native-webview';

class ChatBotScreen extends Component {

//render 되기 전 실행
  componentWillUnmount() {
    localNotification.unregister();
  }
// render 된 후 실행
//   componentDidMount() {
// }

onWebviewMessage = (e) => {
    alert("hi React Native" + e.nativeEvent.data.name);
    localNotification.register();
  }
  render() {
    return (
      <WebView
        scalesPageToFit={true}
        bounces={false}
        style={{height: '100%', width: '100%'}}
        source={{uri: 'http://13.124.218.26:3000/UI?type=M&userId=원혁'}}
        automaticallyAdjustContentInsets={false}
        onMessage={this.onWebviewMessage}
        javaScriptEnabled={true}
        />
    );
  }
}

const styles = StyleSheet.create({});

export default ChatBotScreen;
