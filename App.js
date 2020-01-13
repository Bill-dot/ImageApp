import React from 'react';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import MainScreen from './src/screens/MainScreen';
import FruitScreen from './src/screens/FruitScreen';
import LargeScreen from './src/components/LargeScreen';

const navigator=createStackNavigator(
  {
    Main: MainScreen,
    Fruit: FruitScreen,
    LargeImage: LargeScreen
  },
  {
    initialRouteName:'Main',
    defaultNavigationOptions:{
      title:'Fruits'
    }
  }
)

export default createAppContainer(navigator)
