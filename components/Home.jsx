import React from "react";
import {StatusBar, Text, View, StyleSheet} from "react-native";

export default function Home () {

    return (
        <View>
            <StatusBar />
            <Text>
                Hello P3
            </Text>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})