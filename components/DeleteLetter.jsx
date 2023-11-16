import React, { useState } from 'react'

const DeleteLetter = () => {

    const [inputUser, setInputUser] = useState()
    const [letterForDelete, setLetterForDelete] = useState()
    const [newSentece, setNewSentece] = useState()

    const handleDeleteLetter = (letter)=>{
        const copyInputUser = structuredClone(inputUser.split(""))
        const deleteLetter = copyInputUser.filter((actualLetter)=> actualLetter !== letter)
        setNewSentece(deleteLetter.join(""))
    }
    
  return (
    <>
    Escribe una frase
    <input onChange={(e)=>{setInputUser(e.target.value)}}></input>
    
    Escribe la letra que quieras eliminar
    <input onChange={(e)=>{setLetterForDelete(e.target.value)}} maxLength="1"></input>
    <button onClick={()=>{handleDeleteLetter(letterForDelete)}}>Click para eliminar</button>
    {newSentece}
    </>
  )
}

export default DeleteLetter