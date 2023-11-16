import React, {useState} from 'react'

const SwitchCapitalLetter = () => {

    const [inputUser, setInputUser] = useState()

    const handleUpperCase = () => {
        const copyArr = structuredClone(inputUser.toUpperCase())
        
        // const changeUpperCase = copyArr.map((letter)=>{
        //     letter.toUpperCase()
        // })
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