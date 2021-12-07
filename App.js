import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from './src/screens/TrackListScreen';
import AccountScreen from "./src/screens/AccountScreen";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {setNavigator} from './src/navigationRef';
import HomeScreen from "./src/screens/HomeScreen";
import TheDeck from "./src/screens/TheDeck";
import TheCove from "./src/screens/TheCove";
import ChickfilA from "./src/screens/ChickfilA";
import Item from "./src/screens/Item";
import ItemReuslts from "./src/screens/ItemResults";
import Moes from "./src/screens/Moes";



const switchNavigator = createSwitchNavigator({
    loginFlow: createStackNavigator({
      Signup: SignupScreen,
      Signin: SigninScreen,
      Deck: TheDeck,
      Cove: TheCove,
      Chick: ChickfilA,
      Item: Item,
      ItemReuslts: ItemReuslts,
      Moe: Moes,
      Home: HomeScreen
    }),
    mainFlow: createBottomTabNavigator({
      trackListFlow: createStackNavigator({
        TrackList: TrackListScreen,
        TrackDetail: TrackDetailScreen
      }),
      TrackCreate: TrackCreateScreen,
      Account: AccountScreen
    })
});


const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App ref={(navigator) => {setNavigator(navigator)}}/>
    </AuthProvider>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
