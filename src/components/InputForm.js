import React from 'react'

const InputForm = () => {
    return (
        <form className="form-control">
            <label>Name:</label>
            <input type="text" placeholder="Pokemon name here..." />
            <label>PokeDEX # Entry:</label>
            <input type="text" placeholder="Pokemon # here..." />
        </form>
    )
}

export default InputForm
