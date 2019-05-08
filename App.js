import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import BountyDescriptionScreen from './app/screens/bountyDescription/BountyDescriptionScreen';
import AppNavigator from './app/utils/AppNavigator';

const AppScreen = createStackNavigator({
  BountyDescriptionScreen: {
    screen: BountyDescriptionScreen,
  }
}, {
  initialRouteName: 'BountyDescriptionScreen',
  headerMode: 'none'
})

const AppContainer = createAppContainer(AppScreen);

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppContainer
          ref={ref => AppNavigator.setTopLevelNavigator(ref)}
        />
      </View>
    );
  }
}