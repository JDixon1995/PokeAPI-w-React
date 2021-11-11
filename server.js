const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Body Parser
app.use(bodyParser.json());



app.get('/', (req, res) => {
    const pokedex = app.get('https://pokeapi.co/')
    res.send(pokedex)
    console.log(pokedex)
})

app.get('/api/v2/pokemon/:id', (req, res) => {
    const id = Number(req.params.id)
    const pokemon = pokemon.find( pokemon => pokemon.id === id)
    res.json(pokemon)
})

const PORT = 5000

app.listen(PORT, (req, res) =>{
    console.log(`Server running on port ${PORT}`)
})