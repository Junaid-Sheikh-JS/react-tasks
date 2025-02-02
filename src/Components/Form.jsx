import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.value);
    }
    return (
        <div>
            <h2>Input Your Name</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text"
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button type='submit'>Submit</button>
            </form>
            <p>{name}</p>
        </div>
    )
}

export default Form
