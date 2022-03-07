/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Image,
  Modal
} from 'react-native';

class ModalComponent extends Component {
  state = {
      modal:false
  };

  handleModal = () => {
      this.setState({
          modal: this.state.modal ? false : true
      })
  }
  render() {
    return (
      <View>
        <Button
            title='Open Modal'
            onPress={this.handleModal}
        />

        <Modal
            visible={this.state.modal}
            animationType={'fade'}
            onShow={()=>alert('Warning!!!')}
        >
            <View style={{marginTop: 60,
            backgroundColor:'red'
            }}>
                <Text>This is Modal contents</Text>
            </View>
            <Button
            title='Go back'
            onPress={this.handleModal}
        />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default ModalComponent;
