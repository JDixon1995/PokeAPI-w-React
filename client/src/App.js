import { useState } from 'react'
import Header from './components/Header'
import Button from './components/Button'
import InputForm from './components/InputForm'

const App = () => {

  const [ showSearchForm, setShowSearchForm ] = useState(false)

  return (
    <div className="container">
      <Header />
      <Button text='Search PokeDex' />
      {!showSearchForm ? '' : <InputForm />}
    </div>
  );
}

export default App;
