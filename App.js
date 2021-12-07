import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import CartScreen from "./src/screens/CartScreen";
import OrderScreen from './src/screens/OrderScreen';
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
import ItemResults from "./src/screens/ItemResults";
import Moes from "./src/screens/Moes";



const switchNavigator = createSwitchNavigator({
    loginFlow: createStackNavigator({
      Signup: SignupScreen,
      Signin: SigninScreen,
    }),
    mainFlow: createBottomTabNavigator({
      Home: createStackNavigator({
        Dining: HomeScreen,
        Deck: TheDeck,
        Cove: TheCove,
        ChickfilA: ChickfilA,
        Moes: Moes,
        Item: ItemResults,
        Orders: OrderScreen,
      }),
      Account: AccountScreen,
      Cart: CartScreen
    }),
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
