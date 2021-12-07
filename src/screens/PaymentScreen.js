import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from "react-native";

const BUYING = 'buying stuff'
const PURCHASE = 'done buying stuff'

const PaymentScreen = ({navigation}) =>
{
    const [purchase, changePurchase] = useState(BUYING)
    var display;
    switch (purchase)
    {
        case BUYING:
            display = 
            <View>
                <TouchableOpacity onPress={function(){navigation.navigate('Cart')}}>
                    <Text style={styles.backText}> Back </Text>
                </TouchableOpacity>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.text}> Payment </Text>
                    <Text> Credit / Debit Card Number</Text>
                </View>
                <View style={styles.inputBox}>
                    <TextInput style={styles.input} maxLength={16}/>
                </View>
                    
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <Text> Expiration </Text>
                    <Text> CVC </Text>
                    <Text> Zip Code</Text>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <View style={styles.inputBox}>
                        <TextInput style={styles.input} maxLength={5}/>
                    </View>
                    <View style={styles.inputBox}>
                        <TextInput style={styles.input} maxLength={3}/>
                    </View>
                    <View style={styles.inputBox}>
                        <TextInput style={styles.input} maxLength={5}/>
                    </View>
                </View>
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity onPress={function(){changePurchase(PURCHASE)}}>
                        <Image style={styles.pay} source={require('../../assets/Pay.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
            break;
        case PURCHASE:
            display =
            <View>
                <View style={{alignItems: 'center'}}>
                    <Image style={styles.purchased} source={require('../../assets/Purchased.png')}/>
                    <TouchableOpacity>
                        <Text style={{padding: 20, fontSize: 20, fontFamily: 'Futura'}}> Orders </Text>
                    </TouchableOpacity>
                </View>
            </View>
            break;
    }
    return display
};

const styles = StyleSheet.create({
    text: 
    {
        fontSize : 30,
        paddingBottom: 20
    },
    inputBox:
    {
        margin: 10,
        height: 40,
        borderWidth: 1,
    },
    input:
    {
        textAlign: 'center',
        fontSize: 15, 
        padding: 10    
    },
    backText:
    {
      fontSize: 20, 
      fontFamily: 'Futura'
    },
    pay:
    {
        width: 120,
        height: 50
    },
    purchased:
    {
        width: 450,
        height: 500
    }
    });

export default PaymentScreen;