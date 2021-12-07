import React, { useContext } from 'react'
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native'
import { State } from 'react-native-gesture-handler'
import AuthForm from "../components/AuthForm"
import NavLink from "../components/NavLink"
import { Context as AuthContext } from '../context/AuthContext'
import Spacer from '../components/Spacer'

const SigninScreen = (props) => {

    const { state, signin} = useContext(AuthContext);

    return <View style={styles.container}>

<Image source = {require('../../assets/Ooshie.png')}
            style = {{width: 300, height: 100, alignSelf: "center"}}
     />



    <AuthForm
        headerText="Sign in for Ooshie here!"
        errorMessage={state.errorMessage}
        onSubmit = {(email, password)=> {signin({email, password})}}
        submitButtonText="Sign In"

    />

<Spacer>
        </Spacer> 
        <Spacer>
        </Spacer> 
        <Spacer>
        </Spacer>


        <TouchableOpacity onPress={()=> {props.navigation.navigate("Signup")}}>
        <Spacer>
            <Text style ={styles.link}>Don't have an account with us? Sign up instead.</Text>
        </Spacer> 
        </TouchableOpacity>   



    </View>
}

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;