import axios from 'axios';


class PokemonService{
    
    async fetchPokemon(pokemonName:string|number){
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        return res.data
    }

    
}


export default PokemonService;