import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Button from './components/Button'
import InputForm from './components/InputForm'
import PokemonThumb from './components/PokemonThumb'

const App = () => {

  const [ allPokemon, setAllPokemon ] = useState([])
  const [ loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')


  const sortArray = async () => {
    allPokemon.sort((a, b) => a.id - b.id)
  }

  const getAllPokemon = async () => {
    const res = await axios.get(loadMore)
    const data = await res.data
    const results = res.data.results

    setLoadMore(data.next)

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.data

        setAllPokemon(currentList => [...currentList, data])
      })
    }
    createPokemonObject(data.results)
  }
  
  useEffect(() => {
    getAllPokemon()
  }, [])

  useEffect(() => {
    sortArray()
  })

  return (
    <div className="container">
      <Header />
      <InputForm />
      <h2>PokeDEX</h2>
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemon.map( (pokemonStats, index) => 
          <PokemonThumb 
          key={index}
          id={pokemonStats.id}
          image={pokemonStats.sprites.other.dream_world.front_default}
          name={pokemonStats.name = pokemonStats.name.charAt(0).toUpperCase() + pokemonStats.name.slice(1)}
          type={pokemonStats.types[0].type.name}
          />)
        }


        </div>
        <Button text='Load More...' onClick={() => getAllPokemon()} />
      </div>
    </div>
  );
}

export default App;