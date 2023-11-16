import React from 'react'

const PasswordForm = () => {
    
  return (
    <>
    <input placeholder='password' type='password' onChange={(e)=>{e.target.value}}></input>
    <button>Mostrar contraseña</button>
    </>
  )
}

export default PasswordForm