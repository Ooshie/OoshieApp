import React from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';

const WelcomeScreen = ({navigation}) => {
    return <View>
        <Text style = {styles.textStyle}>OOSHIE</Text>
        <Image
            //style = {{alignSelf: 'center', width: 500, height: 500, backgroundColor: 'pink'}}
            //source = {require('../../assets/AmpereAura.gif')}
        />
         <TouchableOpacity
            style = {{}}
            onPress = {() =>{
                navigation.navigate("SignIn")
            }}
        >
            <Image 
            source = {require('../../assets/signin.png')}
            style = {{width: 100, height: 100, alignSelf: "center"}}
            
            />
        </TouchableOpacity>
        {/*<Button 
            onPress = {() =>{
                    navigation.navigate("SignIn")
                }
            }
            title = "Sign In"
        />*/}
        <Button 
            onPress = {() =>{
                    navigation.navigate("SignUp")
                }
            }
            title = "Sign Up"
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

export default WelcomeScreen;