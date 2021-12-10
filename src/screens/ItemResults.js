import React, { useState } from 'react'
import {View, Image, Text, StyleSheet, TextInput, Picker, Button, TouchableOpacity} from 'react-native'

const ItemResults= ({navigation}) =>{
    const [selectedValue, setSelectedValue] = useState("meal");
    
    const [quantity, setQuantity] = useState(1);
    
    const price = () => {
        return <Text>Price: ${JSON.stringify(navigation.getParam('price', 'NO-ID'))}</Text>
      };

    const checkDecrease = () => {
        if(quantity > 1)
        return 1
        else
        return 0
      };

    return(
        <View style={styles.container}>
            
            <Text style={styles.text}>{JSON.stringify(navigation.getParam('otherParam', 'default value'))}</Text>
            <Text>{price()}</Text>
            <Text style={styles.space}> </Text>

            <Picker
                selectedValue={selectedValue}
                style={styles.mealBar}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Meal" value="meal" />
                <Picker.Item label="No Meal" value="nomeal" />
            </Picker>
            

            <Text style={styles.text}>Quantity: {quantity}</Text> 

            <View style={styles.buttons}>
                <Button title = "Increse" onPress={function() {setQuantity(quantity + 1)}}/>
                <Text style={styles.space2}> </Text>
                <Button title = "Decrease" onPress={function() {setQuantity(quantity - checkDecrease())}}/>
            </View>
            <Text style={styles.space2}> </Text>
            <Button title = "Add To Cart"/>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        marginLeft: 1,
        alignItems: "center",
        justifyContent:'space-between'
    },

    text: {
        fontSize: 30,
        color: "midnightblue",
        textAlign: "center",
        fontWeight: "bold",
        textShadowColor: "blue",
    
      },

      mealBar:{
        alignItems: "center",
        height: 200, 
        width: 200
    },

    buttons: {
        flexDirection: "row",
        padding: 1,
        justifyContent:'space-between',
    },

    space: {
        fontSize: 30,
        lineHeight: 50,
    },

    space2: {
        fontSize: 30,
        lineHeight: 30,
    },

})

export default ItemResults
