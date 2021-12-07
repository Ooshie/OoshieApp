import React from 'react'
import {View, StyleSheet, Text, Button} from 'react-native'

const TrackListScreen = (props) => {
    return <View>
        <Text style={{ fontSize: 48}}>Track List Screen</Text>
        <Button title="Go to Track Detail"
        onPress={() => {props.navigation.navigate("TrackDetail")}}></Button>
    </View>
}

const styles = StyleSheet.create({});

export default TrackListScreen;