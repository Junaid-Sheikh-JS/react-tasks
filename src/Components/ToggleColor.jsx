import React, { useState } from 'react'

const ToggleColor = () => {
    let [color, setColor] = useState('black')
  return (
    <div>
      <h1 style={{color: color}}>Toggle Color</h1>
      <button onClick={() => setColor(color === 'black' ? 'red' : 'black')}>Change</button>
    </div>
  )
}

export default ToggleColor
