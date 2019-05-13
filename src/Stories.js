import React, { memo } from 'react'
import { useFetch } from './hooks'

function Stories() {
  const stories = useFetch('https://news-proxy-server.appspot.com/topstories', [], 'getStories')

  return (
    <div className="Stories">
     <h3>Stories</h3>
     {
        stories.map(story => {
          const { id, by, time, title, url } = story

          return (
            <div key={id}>
              <a href={url} target="__blank">{title}</a>
              <div>{by} - {new Date(time * 1000).toLocaleString()}</div>
            </div>
          )
        })
     }
    </div>
  )
}

export default memo(Stories)
