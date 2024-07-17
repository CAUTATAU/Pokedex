import React, { useState, useEffect } from "react";
import CheckBox from 'expo-checkbox'
import { View, Text, StyleSheet, KeyboardAvoidingView, ScrollView, Image, TextInput, } from "react-native";
import PokedexBox from "../components/redBox";
import PokemonScreen from "../components/pokemonScreen";
import PokemonService from "../services/pokemonService";
import Button from "../components/button";

export default function Pokedex() {
    const [pokemonName, setPokemonName] = useState('bulbasaur');
    const [pokemonData, setPokemonData] = useState<any | null>(null);
    const [pokemonID, setPokemonID] = useState(1);
    const [isShiny, setShiny] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const pokeService = new PokemonService();

    const handleSearch = async () => {
        try {
            setError(null);
            const data = await pokeService.fetchPokemon(pokemonName.toLowerCase());
            setPokemonData(data);
            setPokemonID(data.id);
            setPokemonName(data.name) // Atualiza o ID do Pokémon
        } catch (err) {
            setError('Pokemon não encontrado');
            setPokemonData(null); // Limpa os dados em caso de erro
        }
    }
    const nextPokemon = async () =>{
        try{
            const newId = pokemonID+1
            const data = await pokeService.fetchPokemon(newId)
            setPokemonData(data);
            setPokemonID(newId)
            setPokemonName(data.name)
        }
        catch{
            setError('erro')
        }
        
    }
    const perviousPokemon = async () =>{
        try{
            const newId = pokemonID-1
            const data = await pokeService.fetchPokemon(newId)
            setPokemonData(data);
            setPokemonID(newId)
            setPokemonName(data.name)
        }
        catch{
            setError('erro')
        }
    }

    useEffect(() => {
        handleSearch();
    }, []);

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <PokedexBox style={{ paddingTop: "20%" }}>
                    <PokemonScreen>
                        { pokemonData ? (
                            isShiny?<Image source={{ uri: pokemonData.sprites.front_shiny }} style={styles.image} />:
                            <Image source={{ uri: pokemonData.sprites.front_default}} style={styles.image} />
                            
                        ) : (
                            <Text>Pokemon nao encontrado</Text>
                        )}
                    </PokemonScreen>
                    {pokemonData ? (
                         <View style={[styles.pokemonData,{top:20}]}>
                         <Text style={{ fontWeight: "bold" }}>name: {pokemonData.name}</Text>
                         <Text>id: {pokemonData.id}</Text>
                         <Text>types: {pokemonData.types.map((type:any) => type.type.name).join(', ')}</Text>
                       </View>
                    ) : (
                        <Text>{error}</Text>
                    )}
                    <View style={{paddingVertical:50,alignItems:"center",flexDirection:"row",justifyContent:"center",paddingHorizontal:10,}}>
                        <Button texto="voltar" onPress={perviousPokemon} />
                        <TextInput placeholder="pesquisar" onChangeText={setPokemonName} style={styles.input}  />
                        <Button texto="avançar" onPress={nextPokemon}/>
                    </View>
                    <Button texto="buscar" onPress={handleSearch} />
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <CheckBox value={isShiny} onValueChange={setShiny} style={styles.checkbox}  />
                        <Text>Shiny</Text>
                    </View>
                    
                    
                </PokedexBox>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        width: "100%",
        backgroundColor: "white",
    },
    scrollContainer: {
        justifyContent: 'center',
        flexGrow: 1,
        marginHorizontal: 0,
        overflow: "hidden",
        alignItems: "center",
    },
    image: {
        width: 200,
        height: 200,
    },
    pokemonData: {
        
        height: 100,
        width: 300,
        alignItems: 'center',
        backgroundColor: "white",
        flexDirection: 'column',
        borderWidth:4,
        justifyContent:"center",
        borderLeftColor:"black",
        borderTopColor:"black",
        borderRightColor:"gray",
        borderBottomColor:"gray",
        
    },
    input: {
        height: 30,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 20,
        backgroundColor:"white",
        width: '40%',   
        borderRadius:15
    },
    checkbox: {
        margin:8
    }
});
