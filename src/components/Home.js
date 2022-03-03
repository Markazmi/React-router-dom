import React from 'react'
import { UserAuth } from './userAuth'

export const Home = () => {
    const {user} = UserAuth

  return (
    <div>welcome {user}</div>
  )
}
