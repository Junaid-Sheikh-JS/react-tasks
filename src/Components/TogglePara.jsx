import React, { useState } from 'react'

const TogglePara = () => {
    const [show, setShow] = useState(true)
    return (
        <>
            <h1>Toggle Paraggraph</h1>
            {show &&
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis veniam nulla magni possimus repellendus cum provident dignissimos sed assumenda odit aspernatur rerum unde suscipit modi illo ratione, similique cumque tempore impedit quis.</p>
            }
            <button onClick={() => setShow(!show)}>
                {show ? 'Hide' : 'Show'}
            </button>
        </>
    )
}

export default TogglePara
