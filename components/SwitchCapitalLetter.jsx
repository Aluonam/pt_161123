import React, {useState} from 'react'

const SwitchCapitalLetter = () => {

    const [inputUser, setInputUser] = useState()
    const [newSentece, setNewSentece] = useState()

    const handleUpperCase = () => {
        const copyArr = structuredClone(inputUser.toUpperCase())
        setNewSentece(copyArr)
    }
  return (
    <>
    <input onChange={(e)=>{setInputUser(e.target.value)}} placeholder='Escribe una frase'></input>
    <br/>
    <button onClick={()=>{handleUpperCase()}}>Cambia a mayúsculas</button>
    {newSentece}
    </>
  )
}

export default SwitchCapitalLetter