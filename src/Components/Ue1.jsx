import React, { useState } from 'react'



function Ue1() {

    const [count, setCount]= useState(0)
    const [text, setText]= useState('')

    let incrementCount = () => {
        setCount(count+1)

    }
     let handleChange= (e) => {
        setText(e.target.value)
     }


  return (
    <div>
        <h1>This is my Count Value : {count}</h1>
        <input onChange = {handleChange} type="text"  value={text}/>
        <h2>{text}</h2>
        <button onClick={incrementCount}>Increment</button>

    </div>
  )
}

export default Ue1