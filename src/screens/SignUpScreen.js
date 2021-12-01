import React from 'react';
import { Text, View, StyleSheet, Image, Button} from 'react-native';

const SignUpScreen = ({navigation}) => {
    return <View>
        <Text style = {styles.textStyle}>Hello Sign Up Screen</Text>
        <Image
            //style = {{alignSelf: 'center', width: 500, height: 500, backgroundColor: 'pink'}}
            //source = {require('../../assets/AmpereAura.gif')}
        />
        <Button 
            onPress = {() =>{
                    navigation.navigate("Character")
                }
            }
            title = "Start"
        />
    </View>
}

const styles = StyleSheet.create({
    textStyle: {
        alignSelf: 'center',
        fontSize: 50,
        color: 'pink',
        backgroundColor: 'black',
        borderWidth: 5,
        borderColor: 'black'
    }
});

export default SignUpScreen;