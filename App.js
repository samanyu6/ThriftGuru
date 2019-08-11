/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator, createAppContainer,createSwitchNavigator } from 'react-navigation';

import Home from './Screens/Home';
import TabNav from './Screens/Tabnav';

// const SwitchNav = createSwitchNavigator({

// });

const stackNav = createStackNavigator({
  Home: {
    screen: Home
  },
  Tab: {
    screen: TabNav
  }
  }, {
    initialRouteName: "Home",
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });


class App extends Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    )
  }
}

export default createAppContainer(stackNav)
