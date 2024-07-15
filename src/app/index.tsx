import React from "react";
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Pokedex from "../screens/pokedex";

export type StackParamList={
    Pokedex:undefined
}

function Authstack(){
    const Stack = createNativeStackNavigator<StackParamList>()
    return(
        <Stack.Navigator >
            <Stack.Screen name="Pokedex" component={Pokedex} options={{headerShown:false}}  />
        </Stack.Navigator>
    )
}

export default function Layout(){
    return(
        <GestureHandlerRootView>
            <Authstack />
        </GestureHandlerRootView>
    )
}