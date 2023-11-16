import React, { useState } from 'react'
import ModalPassword from './ModalPassword'

const PasswordForm = () => {

    const [inputPassword, setInputPassword] = useState()
  return (
    <>
    <input placeholder='password' type='password' onChange={(e)=>{setInputPassword(e.target.value)}}></input>
    <ModalPassword></ModalPassword>
    </>
  )
}

export default PasswordForm