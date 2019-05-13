import React, { useState, useEffect } from 'react'
import Joke from './Joke'
import Stories from './Stories'

function App() {
  const [userQuery, setUserQuery] = useState('')
  const [form, setForm] = useState({
    name: '',
    lastName: '',
    age: 0,
    email: ''
  })

  const updateUserQuery = event => {
    setUserQuery(event.target.value)
  }

  useEffect(() => {
    console.log(form)
  })

  const handleForm = event => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  const handleKeyPress = event => {
    event.key === 'Enter' && searchQuery()
  }

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`)
  }

  return (
    <div className="App">
      <h1>Welcome {userQuery}</h1>
      <div className="form">
        <input value={userQuery} onChange={updateUserQuery} onKeyPress={handleKeyPress} />
        <input name="name" placeholder="name" onChange={handleForm} />
        <input name="lastName" placeholder="lastName" onChange={handleForm} />
        <input name="age" placeholder="age" onChange={handleForm} type="number" />
        <input name="email" placeholder="email" onChange={handleForm} type="email" />
        <button disabled={!userQuery} onClick={searchQuery}>Search</button>
      </div>
      <hr />
      {/* <Joke />
      <Stories /> */}
    </div>
  )
}

export default App
