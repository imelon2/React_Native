/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {Component} from 'react';
 import {StyleSheet, View, Text, Button, Image, ScrollView } from 'react-native';
 import Logo from './assets/pics/home.png'
 import { CommonActions } from '@react-navigation/native';

 class SideDrawer extends Component {

  navigateToScreen = (route) => () => {
    this.props.navigation.dispatch(
      CommonActions.navigate({
        name: route,
        params: {},
      })
    )
  }

   render() {
     return (
       <View
         style={styles.container}>
         <ScrollView>
           <View>
             <View style={styles.imageContainer}>
               <Image
                source={Logo}
                style={{width: 40, height: 40}}
               />
             </View>
             <Text>Section 1</Text>
             <View>
               <Text
                onPress={this.navigateToScreen('Home')}
               >Home</Text>
               <Text>User</Text>
               <Text>Help</Text>
               <Text>Info</Text>
             </View>
           </View>
         </ScrollView>
         <View style={{paddingLeft: 10, paddingBottom: 30}}>
           <Text>Copyright @ Winto, 202</Text>
         </View>
       </View>
     );
   }
 }
 
 const styles = StyleSheet.create({
     container: {
         flex:1,
         paddingTop: 80
     },
     imageContainer: {
       alignItems: 'center',
       padding: 50,
     }
 });
 
 export default SideDrawer;
 