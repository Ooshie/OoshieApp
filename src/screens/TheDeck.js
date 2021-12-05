import React from "react";
import {View, Text, StyleSheet, Image, Button, TouchableOpacity } from "react-native";

const TheDeck = (props) => {
  return (
    <View>

        <Text style={styles.text}>The Deck!</Text>
        
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