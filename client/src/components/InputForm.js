import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import PokemonThumb from './PokemonThumb'

const InputForm = () => {

    const [ searchArray, setSearchArray ] = useState([])
    const [ searchName, setSearchName ] = useState('')

    const searchPokemon = async (e) => {
      if (searchName === '') {
        alert('Please enter the name of a Pokemon...')
      } else {
        e.preventDefault()
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchName}`)
        const data = await res.data
        setSearchName('')
        setSearchArray(currentList => [data])
      }
    }
    return (
    <div>
        <form className="form-control" onSubmit={(e) => searchPokemon(e)}>
            <label>Name:</label>
            <input type="text" placeholder="Pokemon name here..."
            value={searchName} onChange={(e) => setSearchName(e.target.value)}
            />
            {searchArray.map( (pokemonStats, index) => 
          <PokemonThumb 
          key={index}
          id={pokemonStats.id}
          image={pokemonStats.sprites.other.dream_world.front_default}
          name={pokemonStats.name = 
            pokemonStats.name.charAt(0).toUpperCase() + pokemonStats.name.slice(1)}
          type={pokemonStats.types[0].type.name}
          />)
        }
            <button 
            className="btn" 
            type="submit">Search</button>
        </form>
        <div id="searchContainer">
        </div>
    </div>
    )
}

export default InputForm
