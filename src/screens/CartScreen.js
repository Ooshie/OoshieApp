// Necessary Imports
import React, {useState} from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";

// States
const START = 'options';
const DELIVERY = 'delivery';
const PICKUP = 'pickup';

// Variables for general cases so it could be modified
var Item, Count, Price, Subtotal, Tax, DeliveryFee, Total, Where, Time

// Dummy data used instead of list
Item = 'Chicken Sandwich'
Price = 10.15
Count = 1
Where = 'New Orleans'
Subtotal = Price * Count
Tax = parseFloat((.0945 * Subtotal).toFixed(2))
// Whatever you want I just put this here for dummy data
DeliveryFee = 10.00 
// Could be anything
Time = '5 - 10 minutes' 
Total = (Subtotal + Tax + DeliveryFee)


const CartScreen = ({navigation}) => {
  
  const [optionState, setOptionState] = useState(START);
  var display;

  switch(optionState)
  {
    case START:
      display=
      <View style={{backgroundColor: 'white', flex: 1}}>
        <TouchableOpacity>
          <Text style={styles.backText}> Back </Text>
        </TouchableOpacity>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.headerText}> Cart {'\n'} How do you want to receive your food?</Text>
        </View>
        <View style={styles.option}>
          
          <View>
            <TouchableOpacity onPress={function(){setOptionState(DELIVERY)}}>
              <Image style={{width: 170, height: 100}} source={require('../../assets/deliveryBTN.png')}/>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity onPress={function(){setOptionState(PICKUP)}}>
              <Image style={{width: 170, height: 100}} source={require('../../assets/pickupBTN.png')}/>
            </TouchableOpacity>
          </View>

        </View>
      </View>
      break;

    case DELIVERY:
      display=
      <View>
        <TouchableOpacity onPress={function(){setOptionState(START)}}>
          <Text style={styles.backText}> Back </Text>
        </TouchableOpacity>
        <View style={{alignItems: 'center'}}>
            <Image style={{width: 340, height: 200}} source={require('../../assets/deliveryBTN.png')}/>
        </View>
        <View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 20}}>
              <Text style={styles.receiptText}> 
                  Item: {'\n'}
                  Count: {'\n'}
                  Location: {'\n'}
                  Subtotal: {'\n'}
                  Tax (9.45%):  {'\n'}
                  Delivery Fee: {'\n'}
                  Total: {'\n'}
                  Est. Delivery Time:
              </Text>
              <Text style={styles.receiptText}>
                  {Item} {'\n'}
                  {Count} {'\n'}
                  {Where} {'\n'}
                  ${Subtotal} {'\n'}
                  ${Tax} {'\n'}
                  ${DeliveryFee} {'\n'}
                  ${Total} {'\n'}
                  {Time}
              </Text>
            </View>
            
            <View style={{alignItems:'center', paddingBottom: 70}}>
              <TouchableOpacity onPress={function(){navigation.navigate('Pay')}}>
                <Image style={{width: 250, height: 100}}source={require('../../assets/Pay.png')}/>
              </TouchableOpacity>
            </View>
        </View>

        <View style={{flexDirection: 'row', justifyContent:'space-evenly'}}>
          <TouchableOpacity>
           <Text style={styles.receiptText}> Home </Text>
          </TouchableOpacity>
      
          <TouchableOpacity>
            <Text style={styles.receiptText}> Orders </Text>
          </TouchableOpacity>
    
          <TouchableOpacity>
            <Text style={styles.receiptText}> Account </Text>
          </TouchableOpacity>
        </View>
      </View>
      break;
    case PICKUP:
      display=
      <View>
        <TouchableOpacity onPress={function(){setOptionState(START)}}>
          <Text style={styles.backText}> Back </Text>
        </TouchableOpacity>
        <View style={{alignItems: 'center'}}>
          <Image style={{width: 340, height: 200}} source={require('../../assets/pickupBTN.png')}/>
        </View>
        <View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 20}}>
              <Text style={styles.receiptText}> 
                  Item: {'\n'}
                  Count: {'\n'}
                  Location: {'\n'}
                  Subtotal: {'\n'}
                  Tax (9.45%):  {'\n'}
                  Total: {'\n'}
                  Expected Time:
              </Text>
              <Text style={styles.receiptText}>
                  {Item} {'\n'}
                  {Count} {'\n'}
                  {Where} {'\n'}
                  ${Subtotal} {'\n'}
                  ${Tax} {'\n'}
                  ${(Total - DeliveryFee)} {'\n'}
                  {Time}
              </Text>
            </View>
            
            <View style={{alignItems:'center', paddingBottom: 100}}>
              <TouchableOpacity onPress={function(){navigation.navigate('Pay')}}>
                <Image style={{width: 250, height: 100}}source={require('../../assets/Pay.png')}/>
              </TouchableOpacity>
            </View>
        </View>

        <View style={{flexDirection: 'row', justifyContent:'space-evenly'}}>
          <TouchableOpacity>
           <Text style={styles.receiptText}> Home </Text>
          </TouchableOpacity>
      
          <TouchableOpacity>
            <Text style={styles.receiptText}> Orders </Text>
          </TouchableOpacity>
    
          <TouchableOpacity>
            <Text style={styles.receiptText}> Account </Text>
          </TouchableOpacity>
        </View>
      </View>
      break;
  }

  return display;

};

const styles = StyleSheet.create({
  backText:
  {
    fontSize: 20, 
    fontFamily: 'Futura'
  },
  text: {
    fontSize: 30,
    color: 'rgb(37, 84, 193)'
  },
  text1: {
    fontSize: 20,
    textAlign: 'center'
  },
  headerText:{
    textAlign: 'center',
    fontFamily: 'Cochin-Bold',
    fontSize: 30,
    paddingBottom: 3
  },
  option:
  {
    flexDirection: 'row',
    marginLeft: 20,
    justifyContent: 'space-evenly',
  },

  option2:
  {
    padding: 10,
  },
  receiptText:
  {
    fontSize: 20,
    fontFamily: 'Bodoni 72'
  }
});

export default CartScreen;
