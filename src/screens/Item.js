import React from 'react'
import {View, Image, Text, StyleSheet, TextInput} from 'react-native'

const Item = (props) =>{
    return(
        <View style={styles.container}>
            <Image style={styles.image} source = {props.link} />
            <Text style={styles.text}>{props.name}</Text>
            <Text>
                Price: ${props.price} 
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        marginLeft: 1,
        alignItems: 'center'
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    text:{
        fontWeight: 'bold'
    }
})

export default Item