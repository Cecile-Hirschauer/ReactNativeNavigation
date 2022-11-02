import React from "react";
import {StatusBar, Text, View, StyleSheet} from "react-native";

export default function Home () {

    return (
        <View style={style.container}>
            <StatusBar />
            <Text style={style.container}>
                Bienvenue dans le Game P3
            </Text>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    pageTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    }
})