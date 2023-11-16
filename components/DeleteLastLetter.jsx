import React, { useState } from 'react'

const DeleteLastLetter = () => {

    const [inputUser, setInputUser] = useState()

    const deleteLast = ()=>{
        const copyArr = structuredClone(inputUser.split(""))
        copyArr.pop()
        setInputUser(copyArr.join(""))
    }
  return (
    <>
    <input onChange={(e)=>{setInputUser(e.target.value)}}></input>
    <button onClick={()=>{deleteLast()}}>Borra la última letra</button>
    {inputUser}
    </>
  )
}

export default DeleteLastLetter