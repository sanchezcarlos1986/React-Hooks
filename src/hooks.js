import { useEffect, useState } from 'react'

export const useFetch = (url, initialValue, alias) => {
  const [result, setResult] = useState(initialValue)

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setResult(data))
      .catch(error => console.error(`Sorry, we got an error fetching ${alias}: ${error.message}`)) 
  }, [url, alias])

  return result
}
