const express = require('express');
const app = express();

const pokedex = app.get('https://pokeapi.co/')

app.get('/', (req, res) => {
    
})

app.get('/api/v2/pokemon/:id', (req, res) => {
    const id = req.params.id
    const pokemon = pokemon.find( pokemon => pokemon.id === id)
    res.json(pokemon)
})

const PORT = 5000

app.listen(PORT, (req, res) =>{
    console.log(`Server running on port ${PORT}`)
})