import React, {useContext, useState} from 'react'
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native'
import {Text, Input, Button} from 'react-native-elements'
import Spacer from "../components/Spacer"
import {Context as AuthContext} from '../context/AuthContext'
import AuthForm from "../components/AuthForm"
import NavLink from "../components/NavLink"
import {NavigationEvents} from 'react-navigation'

const SignupScreen = (props) => {

    const {state, signup, clearErrorMessage} = useContext(AuthContext);
    const [name, setName] = useState('');
    const [idnumber, setIdnumber] = useState('');
    console.log(state)

    return <View style={styles.container}>

    <Image source = {require('../../assets/Ooshie.png')}
            style = {{width: 300, height: 100, alignSelf: "center"}}
     />


        <NavigationEvents
            onWillFocus={() => {clearErrorMessage}}
            onDidFocus={() => {}}
            onWillBlur={() => {}}
            onDidBlur={() => {}}
        />     

        

            <Input 
            autoCapitalize="none"
            autoCorrect={false}
            label="Name"
            value={name}
            onChangeText={(newName) => {setName(newName)}} />

            <Input 
            autoCapitalize="none"
            autoCorrect={false}
            label="UNO ID number"
            value={idnumber}
            onChangeText={(newIdnumber) => {setIdnumber(newIdnumber)}} />


             <AuthForm
        headerText=""
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={({name,email, password}) => signup({name,email, password})}

              />



        <Spacer>
        </Spacer> 
        <Spacer>
        </Spacer> 
        <Spacer>
        </Spacer>


        <TouchableOpacity onPress={()=> {props.navigation.navigate("Signin")}}>
        <Spacer>
            <Text style ={styles.link}>Already have an account with us? Sign in instead.</Text>
        </Spacer> 
        </TouchableOpacity>   

    </View>
}

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        borderColor: 'blue',
        borderWidth: 5,
        flex: 1,
        justifyContent: 'center',
        marginBottom: 0
    },
    errorMessage: {
        fontSize : 16,
        color: 'red'
    },
    link: {
        color: 'green'
    }


});

export default SignupScreen;