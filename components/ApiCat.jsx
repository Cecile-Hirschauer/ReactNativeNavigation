import React, {useEffect, useState} from "react";
import {Image, View} from "react-native";

export default function ApiCat() {
    const [dataCat, setDataCat] = useState("");
    const fetchDataCat = () => {
        fetch("https://aws.random.cat/meow")
            .then((response) => response.json())
            .then((data) => setDataCat(data))
    }
    useEffect(()=>{
        fetchDataCat()
    }, [])

    //log
    useEffect(()=>{
        console.log("dataCat : ", dataCat)
    }, [dataCat])
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image
                source={{uri: dataCat.file}}
                style={{height:300, width: 300}}
            />
        </View>
    )
}