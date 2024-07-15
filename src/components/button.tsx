import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";

type buttonProps = {
    texto: string;
    style?: object
    onPress?: () => void;
}

export default function Button(props: buttonProps) {
    return (
        <View style={[styles.container,props.style]}>
            <Pressable onPress={props.onPress} >
                <Text style={{color:"white"}}>{props.texto}</Text>
            </Pressable>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        
        height: 40,
        width: 100,
        backgroundColor:"#000000",
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 15,
        justifyContent:"center",

    },
    
})