import React from 'react';
import {View, Text, StyleSheet, Button} from "react-native";
import {useLinkTo} from '@react-navigation/native';

import ApiCat from "./ApiCat";

export default function Game() {
    const linkTo = useLinkTo();
    return (
        <View style={style.container}>
            <Text style={style.pageTitle}>Cat Game</Text>

            <View style={{ flex:1, alignItems: 'center', justifyContent: 'center', marginTop: 300}}>
                <ApiCat />
            </View>
        </View>
    )
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
        marginVertical: 8
    }
});

export function Easy() {
    return (
        <View>
            <Text>
                Easy
            </Text>
        </View>
    )
}

export function Medium() {
    return (
        <View>
            <Text>
                Medium
            </Text>
        </View>
    )
}

export function Expert() {
    return (
        <View>
            <Text>
                Expert
            </Text>
        </View>
    )
}