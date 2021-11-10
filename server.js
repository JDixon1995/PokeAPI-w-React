const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send('Hello, world')
})

app.get('/api/v2/pokemon', (req, res) =>{
    res.json(pokemon)
})

const PORT = 5000

app.listen(PORT, (req, res) =>{
    console.log(`Server running on port ${PORT}`)
})