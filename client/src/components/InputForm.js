import React from 'react'
import axios from 'axios'

const InputForm = () => {

    const searchPokemon = async () => {
        let search = 'pikachu'
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
        const data = await res.data
        console.log(data)
      }

    return (
    <div>
        <form className="form-control">
            <label>Name:</label>
            <input type="text" placeholder="Pokemon name here..." />
            <label>PokeDEX # Entry:</label>
            <input type="text" placeholder="Pokemon # here..." />
            <button 
            className="btn" 
            type="submit" 
            onClick={() => searchPokemon()}>Search</button>
        </form>
        <div id="searchContainer">
        </div>
    </div>
    )
}

export default InputForm
