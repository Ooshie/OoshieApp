import React from "react";
import {View, Text, StyleSheet, Image, Button, TouchableOpacity } from "react-native";

const TheCove = (props) => {
  return (
    <View>

        <Text style={styles.text}>The TheCove!</Text>
        
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

export default TheCove;