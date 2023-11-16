import React, { useState } from 'react'
import ModalCounter from './Modalcounter'

const Counter = () => {

    const [number, setNumber] = useState(0)
  return (
    <>
    {number}
    <button onClick={()=>{setNumber(number+1)}}>+</button>
    <button onClick={()=>{setNumber(number-1)}}>-</button>
    <ModalCounter></ModalCounter>
    </>
  )
}

export default Counter