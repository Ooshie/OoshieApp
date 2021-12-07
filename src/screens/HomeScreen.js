import React from "react";
import {View, Text, StyleSheet, Image, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>

        <Image style = {styles.unoImageStyle} source={require('../../assets/UNODiningServices.png')} />

        <Text style={styles.text}>Campus Dining!</Text>
        
        <TouchableOpacity onPress={function(){props.navigation.navigate("Deck")}}>
        <Image style = {styles.imageStyle} source={require('../../assets/thedeck.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={function(){props.navigation.navigate("Cove")}}>
        <Image style = {styles.imageStyle} source={require('../../assets/thecove.png')} />
        </TouchableOpacity>
        
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "midnightblue",
    textAlign: "center",
    fontWeight: "bold",
    textShadowColor: "blue",

  },

  container: {
    justifyContent: 'center',
    alignItems: 'center',

  },

  unoImageStyle: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
  },
    
  imageStyle: {
    width: 300,
    height: 220,
    resizeMode: 'contain',
  }

});

export default HomeScreen;
