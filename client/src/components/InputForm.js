import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const InputForm = () => {

    const [ searchName, setSearchName ] = useState('')

    const searchPokemon = async (e) => {
        e.preventDefault()
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`)
        const data = await res.data
        console.log(data)
      }

    return (
    <div>
        <form className="form-control" onSubmit={(e) => searchPokemon(e)}>
            <label>Name:</label>
            <input type="text" placeholder="Pokemon name here..."
            value={searchName} onChange={(e) => setSearchName(e.target.value)}
            />
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
