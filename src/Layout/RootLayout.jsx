import React from 'react'
import Header from '../Components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'

const RootLayout = () => {
  return (
    <div className='dark pt-5 '>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default RootLayout