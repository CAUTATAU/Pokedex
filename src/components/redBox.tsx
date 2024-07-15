import React from "react";
import { ViewProps, View, StyleSheet } from "react-native";

type MyViewProps = ViewProps & {
    children: React.ReactNode;
}

const PokedexBox: React.FC<MyViewProps> = ({children,style,...rest})=>{
    return(
        <View style={[style,styles.container]}{...rest}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"red",
        width:380,
        height:700,
        borderLeftColor:"gray",
        borderTopColor:"gray",
        borderWidth:10,
        borderRadius:20,
        alignItems:'center',
        
    }
})

export default PokedexBox;