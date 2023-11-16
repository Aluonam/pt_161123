import React, { useState } from 'react'

const DeleteLetter = () => {

    const [inputUser, setInputUser] = useState()
    const [letterDelete, setletterDelete] = useState()
    
  return (
    <>
    Escribe una frase
    <input onChange={(e)=>{setInputUser(e.target.value)}}></input>
    
    Escribe la letra que quieras eliminar
    <input onChange={(e)=>{setletterDelete(e.target.value)}} maxLength="1"></input>
    {inputUser}{letterDelete}
    <button onClick={()=>{}}>Click para eliminar</button>
    </>
  )
}

export default DeleteLetter