import React, { memo } from 'react'
import { useFetch } from './hooks'

function Joke() {
  const { setup, punchline } = useFetch('https://official-joke-api.appspot.com/jokes/random', {}, 'getJokes')

  return (
    <div className="Joke">
     <h3>Joke</h3>
     <p>{setup}</p>
      <p><em>{punchline}</em></p>
    </div>
  )
}

export default memo(Joke)
