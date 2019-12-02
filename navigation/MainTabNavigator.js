import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
// import LinksScreen from '../screens/LinksScreen';
// import SettingsScreen from '../screens/SettingsScreen';
import CelScreen from '../screens/CelScreen';
import ParagonScreen from '../screens/ParagonScreen';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Start',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const CelStack = createStackNavigator(
  {
    Dodaj: CelScreen,
  },
  config
);

CelStack.navigationOptions = {
  tabBarLabel: 'Dodaj',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-filing' : 'md-filing'
      }
    />
  ),
};

CelStack.path = '';

const ParagonStack = createStackNavigator(
  {
    Paragony: ParagonScreen,
  },
  config
);

ParagonStack.navigationOptions = {
  tabBarLabel: 'Paragony',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-filing' : 'md-filing'
      }
    />
  ),
};

ParagonStack.path = '';




// const LinksStack = createStackNavigator(
//   {
//     Links: LinksScreen,
//   },
//   config
// );

// LinksStack.navigationOptions = {
//   tabBarLabel: 'Linki',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
//   ),
// };

// LinksStack.path = '';

// const SettingsStack = createStackNavigator(
//   {
//     Settings: SettingsScreen,
//   },
//   config
// );

// SettingsStack.navigationOptions = {
//   tabBarLabel: 'Ustawienia',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
//   ),
// };

// SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({

  CelStack,
  ParagonScreen,
  HomeStack,
  //LinksStack,
  // SettingsStack,

});

tabNavigator.path = '';

export default tabNavigator;
