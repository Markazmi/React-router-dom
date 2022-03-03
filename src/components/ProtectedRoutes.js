import { Navigate } from 'react-router-dom';
import React from 'react'
import { UserAuth } from './userAuth'

export const ProtectedRoutes = ({children}) => {
    const {user} = UserAuth()

    if(!user){
    return <Navigate to= '/profile'/>
    }
  return children;
}
