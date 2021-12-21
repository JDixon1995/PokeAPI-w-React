import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const InputForm = () => {

    const [ searchName, setSearchName ] = useState('')

    const searchPokemon = async (e) => {
        e.preventDefault()

        axios.get(`https://pokeapi.co/api/v2/pokemon/${searchName}`)
        .then(res => {
            console.log(res.data)
        })
        .catch( err => {
            console.log(err)
        })
      }

    return (
    <div>
        <form className="form-control">
            <label>Name:</label>
            <input type="text" placeholder="Pokemon name here..."
            value={searchName} onChange={(e) => setSearchName(e.target.value)}
            />
            <button 
            className="btn" 
            type="submit" 
            onSubmit={() => searchPokemon()}>Search</button>
        </form>
        <div id="searchContainer">
        </div>
    </div>
    )
}

export default InputForm
