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
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import HomeScreen from './src/home';
import UserScreen from './src/user';
import LogoTitle from './src/logo';
import DrawerHomeScreen from './src/home_drawer';
import DrawerUserScreen from './src/user_drawer';
import PictogramHome from './src/assets/pics/home.png';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help"
        onPress={() => Linking.openURL('http://www.google.com')}
        icon={() => <LogoTitle />}
      />
      <DrawerItem
        label="Info"
        onPress={() => alert('Info window')}
        icon={() => <LogoTitle />}
      />
    </DrawerContentScrollView>
  );
};
class App extends Component {
  // logoTitle = () => {
  //   return (
  //     <Image
  //       style={{width: 40, height: 40, alignSelf: 'center'}}
  //       source={require('./src/assets/pics/home.png')}
  //     />
  //   )
  // }

  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            drawerType: 'slide',
            drawerPosition: 'left',
            drawerStyle: {
              backgroundColor: '#c6cbef',
              width: 200,
            },
            drawerInactiveTintColor: 'blue', //글씨 색,
            drawerActiveTintColor: 'red', //현재 활성화 된 위치 글씨 색
            drawerActiveBackgroundColor: 'skyblue', //현재 활성화 된 위치 배경 색
          }}
          drawerContent={props => <CustomDrawerContent {...props} />}>
          <Drawer.Screen
            name="Home"
            component={DrawerHomeScreen}
            options={{
              drawerIcon: () => <LogoTitle />,
            }}
          />
          <Drawer.Screen
            name="User"
            component={DrawerUserScreen}
            options={{
              drawerIcon: () => <LogoTitle />,
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>

      // <NavigationContainer>
      //   <Stack.Navigator
      //     initialRouteName="Home"
      //     screenOptions={{
      //       headerStyle: {
      //         backgroundColor: '#a4511e',
      //       },
      //       headerTintColor: '#fff',
      //       headerTitleStyle: {
      //         fontWeight: 'bold',
      //         color: '#f3d612',
      //       },
      //     }}>
      //     <Stack.Screen
      //       name="Home"
      //       component={HomeScreen}
      //       options={{
      //         title: 'Home Screen',
      //         headerTitle: props => <LogoTitle/>,
      //         headerRight: () => {
      //           <Button
      //             title='Info'
      //             onPress={()=>alert('Button!!')}
      //             color="orange"
      //           />
      //         }
      //       }}
      //     />
      //     <Stack.Screen
      //       name="User"
      //       component={UserScreen}
      //       initialParams={{
      //         userIdx: 100,
      //         userName: 'Gildong',
      //         userLastName: 'Hond',
      //       }}
      //       // options={{
      //       //   title: 'User Screen',
      //       //   headerStyle: {
      //       //     backgroundColor: 'pink',
      //       //   },
      //       //   headerTintColor: 'red',
      //       //   headerTitleStyle: {
      //       //     fontWeight: 'bold',
      //       //     color: 'purple'
      //       //   }
      //       // }}
      //     />
      //   </Stack.Navigator>
      // </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
