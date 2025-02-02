import React, { useState, useEffect } from 'react'

const FetchApi = () => {
  let [posts, setPosts] = useState([])
  useEffect(() => {
    let fetchData = 'https://jsonplaceholder.typicode.com/posts'
    fetch(fetchData)
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error:', error))
  }, [])
  return (
    <>
      <h1>Fetch Api</h1>
      <div>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <h1>{post.title}</h1>
              <h1>{post.body}</h1>
            </div>
          )
        })
        }
      </div>
    </>
  )
}

export default FetchApi
