import { useState,useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Button from './components/Button'
import InputForm from './components/InputForm'

const App = () => {

  const [ showSearchForm, setShowSearchForm ] = useState(false)
  const [ allPokemon, setAllPokemon ] = useState([])
  const [ loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')


  const getAllPokemon = async () => {
    const res = await axios.get(loadMore)
    const data = res.data

    setLoadMore(data.next)
    
    function createPokemonObject (results) {
      results.forEach(async (pokemon) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon${pokemon.name}`)
        const data = await res.data

        setAllPokemon(currentList => [...currentList, data])
        allPokemon.push(data)
      })
    }
    createPokemonObject(data.result)
  }

  useEffect(() => {
    getAllPokemon()
  }, [])

  return (
    <div className="container">
      <Header />
      <Button 
      onClick={() => setShowSearchForm(!showSearchForm)} 
      text='Search PokeDex'
      />
      {!showSearchForm ? '' : <InputForm />}
      <div className="pokemon-container">
        <div className="all-container"></div>
        <Button text='Load More...' />
      </div>
    </div>
  );
}

export default App;