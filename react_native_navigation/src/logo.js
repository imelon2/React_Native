/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Image} from 'react-native';

import Logo from './assets/pics/home.png';

class LogoTitle extends Component {
  render() {
    return <Image style={{height: 40, width: 30, alignSelf:'center'}} source={Logo} />;
  }
}

export default LogoTitle;
