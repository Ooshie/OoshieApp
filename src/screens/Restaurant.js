import React from "react";
import {View, Text, StyleSheet, Image, Button, TouchableOpacity, FlatList } from "react-native";

const Restaurant = (props) => {
  return (
    <View>

    <TouchableOpacity style={styles.touch} onPress={ () => {props.onRestaurant}}>
        <Text style={styles.text}>{props.name}</Text>
        <Image style = {styles.logo} source = {props.link} />
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    
    touch: {
        flexDirection: 'row',
        padding: 30,
    justifyContent:'space-between'
    },

    text: {
    lineHeight: 100,
    fontSize: 35,
    color: "midnightblue",
    textAlign: "center",
    fontWeight: "bold",
    textShadowColor: "blue",

  },

  logo: {
    width: 150,
    height: 100,
    resizeMode: 'contain',

  }
});

export default Restaurant;