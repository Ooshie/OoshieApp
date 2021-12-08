import React from "react";
import {View, Text, StyleSheet, Image, Button, TouchableOpacity, FlatList, ScrollView } from "react-native";
import Item from "./Item";

const itemsList = [
    

];
const Mo = ({navigation}) => {
  return (
    <View style = {styles.container}>
        <ScrollView>
            <Text style={styles.text}>Moes' Menu!</Text>
            <Text style={styles.text}></Text>
            <Text style={styles.text}></Text>
        
            <TouchableOpacity style={styles.item} onPress={() =>navigation.navigate('Item', {otherParam: "Tacos", price: 8.50})}>
                <Item name= "Tacos" link = {require('../../assets/Tacos.png')}
                price = "8.50"
            />
            </TouchableOpacity>

            <Text style={styles.text}></Text>
            <TouchableOpacity style={styles.item} onPress={() =>navigation.navigate('Item', {otherParam: "Burrito", price: 12.99})}>
                <Item name= "Burrito" link = {require('../../assets/Burrito.png')}
                price = "12.99"
            />
            </TouchableOpacity>

            <Text style={styles.text}></Text>
            <TouchableOpacity style={styles.item} onPress={() =>navigation.navigate('Item', {otherParam: "Quesadilla", price: 5.75})}>
                <Item name= "Quesadilla" link = {require('../../assets/quesadilla.png')}
                price = "5.75"
            />
            </TouchableOpacity>

            <Text style={styles.text}></Text>
            <TouchableOpacity style={styles.item} onPress={() =>navigation.navigate('Item', {otherParam: "SouthWest Grilled", price: 8.25})}>
                <Item name= "SouthWest Grilled" link = {require('../../assets/SouthWestGrill.png')}
                price = "8.25"
            />
            </TouchableOpacity>

            <Text style={styles.text}></Text>
            <TouchableOpacity style={styles.item} onPress={() =>navigation.navigate('Item', {otherParam: "Nachos", price: 6.25})}>
                <Item name= "Nachos" link = {require('../../assets/Nachos.png')}
                price = "6.25"
            />
            </TouchableOpacity>
        </ScrollView>
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

  item: {
    borderWidth: 4,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    borderBottomStartRadius: 100,
    
  },

});

export default Mo;
