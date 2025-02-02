import React, { useState } from 'react'

const UserCard = (props) => {
    const [age, setAge] = useState(props.age)
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.email}</p>
      <button onClick={() => setAge(age - 1)}>decre</button>
      <p>{typeof age}</p>
      <button onClick={() => setAge(age + 1)}>incre</button>
    </div>
  )
}

export default UserCard
