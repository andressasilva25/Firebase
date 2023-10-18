import React from "react";
import { StyleSheet,View, Text } from "react-native";
export default function Login(){
    return(
        <View>
            <Text style={styles.container}>Login</Text>
        </View>
    )
    }

    const styles= StyleSheet.create({
        container:{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            padding: 20,
            marginVertical: 10,
        }
    })