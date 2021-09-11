// ********** PLEASE READ THIS IF YOU ARE VIEWING THIS CODE ************
// The code currently doesn't work because of navigation problems, please visit this code to view the entire app.
// THANKS!


import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// Import screens
import HomeScreen from './screens/HomeScreen';
import ImageScreen from './screens/Stuffscreen';
import Itemadd from './screens/Itemadd';
import LoginScreen from './screens/LoginScreen'

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createMaterialBottomTabNavigator(
  {
    //Home screen
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-home'} />
          </View>
        ),
      },
    },
    // Item add
    ItemAdd: {
      screen: Itemadd,
      navigationOptions: {
        tabBarLabel: 'Add Items',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-add'} />
          </View>
        ),
        activeColor: '#615af6',
        inactiveColor: '#46f6d7',
        barStyle: {
          backgroundColor: '#eee',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          overflow: 'hidden',
          height: 70,
        },
      },
    },
    // Cart, List item
    Cart: {
      screen: ImageScreen,
      navigationOptions: {
        tabBarLabel: 'Item List',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-cart'} />
          </View>
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: 'orange',
    inactiveColor: '#aaa',
    barStyle: {
      backgroundColor: '#eee',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      overflow: 'hidden',
      height: 70,
    },
    labeled: false
  }
);

const styles = StyleSheet.create({});

const SwitchNavigator = createSwitchNavigator({   
  LoginScreen: {screen: LoginScreen},
  TabNavigator: {screen: TabNavigator}
})

const AppContainer = createAppContainer(SwitchNavigator);

//create a database
//render all items in item list
