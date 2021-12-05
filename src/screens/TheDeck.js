import React from "react";
import {View, Text, StyleSheet, Image, Button, TouchableOpacity, FlatList } from "react-native";
import Restaurant from "./Restaurant";

const TheDeck = (props) => {
  return (
    <View>

        <Text style={styles.text}>Restaurants!</Text>
        
        <Restaurant name = "Chick-fil-A" link = {require('../../assets/chickfila.png')}
        />
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

  }
});

export default TheDeck;
