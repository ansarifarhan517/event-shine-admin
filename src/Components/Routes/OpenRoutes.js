import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../Login/Login'

const OpenRoutes = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/' element={<Navigate replace to='/login' />} />
    </Routes>

  )
}

export default OpenRoutes