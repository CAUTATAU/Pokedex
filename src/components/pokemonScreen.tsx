import React from "react";
import { ViewProps, View, StyleSheet, ImageBackground } from "react-native";

type MyViewProps = ViewProps & {
    children: React.ReactNode;
}

const PokemonScreen: React.FC<MyViewProps> = ({ children, style, ...rest }) => {
    return (
        <View style={[style, styles.container]}{...rest}>
            <ImageBackground source={{uri:'https://static.wikia.nocookie.net/epicrapbattlesofhistory/images/c/c9/Pok%C3%A9mon_Go_Grass_Field_Based_On.jpg/revision/latest/scale-to-width-down/300?cb=20190526123323'}} style={[style,styles.content]}{...rest}>
                {children}
            </ImageBackground>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F0F0F0",
        width: "80%",
        height: "40%",
        justifyContent:'center',
        alignItems:'center',
        borderWidth: 5,
        borderRadius: 20
    },
    content:{
        left:5,
        top:5,
        width:"95%",
        height:"95%",
        alignItems:'center',
        justifyContent:'center',
    }
})

export default PokemonScreen;