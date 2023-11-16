import React, {useState} from 'react'

const SwitchCapitalLetter = () => {

    const [inputUser, setInputUser] = useState()

    const handleUpperCase = () => {
        const copyArr = structuredClone(inputUser.split(""))
        console.log(copyArr)
    }
  return (
    <>
    <input onChange={(e)=>{setInputUser(e.target.value)}} placeholder='Escribe una frase'></input>
    <br/>
    <button onClick={()=>{handleUpperCase()}}>Cambia a mayúsculas</button>
    {inputUser}
    </>
  )
}

export default SwitchCapitalLetter