import React from 'react'

const DeleteLetter = () => {
  return (
    <>
    Escribe una frase
    <input onChange={(e)=>{e.target.value}}></input>
    Escribe la letra que quieras eliminar
    <input onChange={(e)=>{e.target.value}}></input>
    <button onClick={()=>{}}>Click para eliminar</button>
    </>
  )
}

export default DeleteLetter