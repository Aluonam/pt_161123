import React, { useState } from 'react'
import ModalCounter from './Modalcounter'

const Counter = () => {

    const [numberCounter, setNumberCounter] = useState(0)
  return (
    <>
    {numberCounter}
    <button onClick={()=>{setNumberCounter(numberCounter+1)}}>+</button>
    <button onClick={()=>{setNumberCounter(numberCounter-1)}}>-</button>
    <ModalCounter numberCounter={numberCounter}></ModalCounter>
    </>
  )
}

export default Counter