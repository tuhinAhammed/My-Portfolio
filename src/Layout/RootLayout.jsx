import React from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='h-[100vh] bg-background py-6'>
        <Header/>
        <Outlet/>
        
    </div>
  )
}

export default RootLayout