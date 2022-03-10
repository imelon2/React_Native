/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, Image, Linking} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import HomeScreen from './src/HomeScreen';
import UserScreen from './src/userScreen';
import SideDrawer from './src/my_drawer';
import TabHomeScreen from './src/home_tab';
import TabUserScreen from './src/user_tab';
import TabMessageScreen from './src/message_tab';
import Icon from 'react-native-vector-icons/Ionicons';


const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TabBarIcon = (focused, name) => {
  let iconImagePath;
  let iconName, iconSize;

  if(name ==='Home') {
    iconName = 'home-outline'
    // iconImagePath = require('./src/assets/pics/home.png')
  }else if (name === 'User') {
    iconName = 'people-outline'
    // iconImagePath = require('./src/assets/pics/home.png')
  }else if (name ==='Message') {
    iconName = 'mail-outline'
    // iconImagePath=require('./src/assets/pics/home.png')
  }

  iconSize = focused ? 30 : 20;
  return (
    <Icon
      name={iconName}
      size={iconSize}
    />
  )
}

class App extends Component {
  render() {
    return (
      <NavigationContainer>
      <Tab.Navigator 
      initialRouteName='Home'
      screenOptions={({route}) => ({
        tabBarActiveBackgroundColor:'white',
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor:'gray',
        tabBarStyle: {
          backgroundColor:'pink'
        },
        tabBarLabel:route.name,
        tabBarIcon : ({focused}) => (
          TabBarIcon(focused, route.name)
        )
        
      })}
      >
        <Tab.Screen name ="Home" component={TabHomeScreen}/>
        <Tab.Screen name ="User" component={TabUserScreen}/>
        <Tab.Screen name ="Message" component={TabMessageScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
      


      // <NavigationContainer>
      //   <Drawer.Navigator
      //     initialRouteName="Home"
      //     screenOptions={{
      //       drawerType: 'slide',
      //       drawerPosition: 'left',
      //       drawerStyle: {
      //         backgroundColor: '#c6cbef',
      //         width: 200,
      //       },
      //       drawerInactiveTintColor: 'blue', //글씨 색,
      //       drawerActiveTintColor: 'red', //현재 활성화 된 위치 글씨 색
      //       drawerActiveBackgroundColor: 'skyblue', //현재 활성화 된 위치 배경 색
      //     }}
      //     drawerContent={props => <SideDrawer {...props} />}>
      //     <Drawer.Screen
      //       name="Home"
      //       component={HomeScreen}
      //       options={{
      //         drawerIcon: () => <LogoTitle />,
      //       }}
      //     />
      //     <Drawer.Screen
      //       name="User"
      //       component={UserScreen}
      //       options={{
      //         drawerIcon: () => <LogoTitle />,
      //       }}
      //     />
      //   </Drawer.Navigator>
      // </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
