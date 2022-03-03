import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import { UserAuth } from './userAuth'

export const Profile = () => {
    const [name, setName] =  useState('');
    const navigate = useNavigate();

    const {login} = UserAuth()
    const handleLogin = ()=>{
        login(name);
        navigate('/')

    }


  return (
    <div>
    <input
      type='text'
      value={name}
      onChange={(e) => setName(e.target.value)}
    />

    <button onClick={handleLogin}>Login</button>
  </div>
  )
}
