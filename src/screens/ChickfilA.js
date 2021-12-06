import React from "react";
import {View, Text, StyleSheet, Image, Button, TouchableOpacity, FlatList, ScrollView } from "react-native";
import Item from "./Item";

const itemsList = [
    

];
const ChickfilA = ({navigation}) => {
  return (
    <View style = {styles.container}>
        <ScrollView>
            <Text style={styles.text}>ChickfilA Menu!</Text>
            <Text style={styles.text}></Text>
            <Text style={styles.text}></Text>
        
            <TouchableOpacity style={styles.item} onPress={() =>navigation.navigate('ItemReuslts', {otherParam: "Chick-fil-A® Chicken Sandwich", price: 10.50,},)}>
                <Item name= "Chick-fil-A® Chicken Sandwich" link = {require('../../assets/sandwich.png')}
                price = "10.50"
            />
            </TouchableOpacity>

            <Text style={styles.text}></Text>
            <TouchableOpacity style={styles.item} onPress={() =>navigation.navigate('ItemReuslts', {otherParam: "Chick-fil-A® Deluxe Sandwich", price: 11.0})}>
                <Item name= "Chick-fil-A® Deluxe Sandwich" link = {require('../../assets/delux.png')}
                price = "11.00"
            />
            </TouchableOpacity>

            <Text style={styles.text}></Text>
            <TouchableOpacity style={styles.item} onPress={() =>navigation.navigate('ItemReuslts', {otherParam: "Grilled Chicken Sandwich", price: 11.0})}>
                <Item name= "Grilled Chicken Sandwich" link = {require('../../assets/grilled.png')}
                price = "11.00"
            />
            </TouchableOpacity>

            <Text style={styles.text}></Text>
            <TouchableOpacity style={styles.item} onPress={() =>navigation.navigate('ItemReuslts', {otherParam: "Chick-fil-A® Nuggets", price: 8.25})}>
                <Item name= "Chick-fil-A® Nuggets" link = {require('../../assets/nuggets.png')}
                price = "8.25"
            />
            </TouchableOpacity>

            <Text style={styles.text}></Text>
            <TouchableOpacity style={styles.item} onPress={() =>navigation.navigate('ItemReuslts', {otherParam: "Grilled Nuggets", price: 8.25})}>
                <Item name= "Grilled Nuggets" link = {require('../../assets/grillednuggets.png')}
                price = "8.25"
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

export default ChickfilA;