import React from "react";
import {View, Text, StyleSheet, Image, Button, TouchableOpacity } from "react-native";
// import Restaurant from "./Restaurant";

const TheCove = ({navigation}) => {
  return (
    <View style = {styles.container}>

    <Image style = {styles.deckImage} source={require('../../assets/thecove.png')} />

        <TouchableOpacity style={styles.pick} onPress ={function(){navigation.navigate("Moe")}} >
        <Text style={styles.text}>The Cove!</Text>
        <Image style = {styles.logo} source = {require('../../assets/Moes.png')}/>
        </TouchableOpacity>

    </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
  },
  
  deckImage: {
      width: 350,
      height: 200,
      resizeMode: 'contain',
      
  },

  logo: {
    width: 150,
    height: 100,
    resizeMode: 'contain',

  },

  pick: {
    borderWidth: 4,
    flexDirection: 'row',
    padding: 40,
    justifyContent:'space-between',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomStartRadius: 20,
    backgroundColor: "darkgrey"
  },

  text: {
    lineHeight: 100,
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    textShadowColor: "blue",
  }

});

export default TheCove;
