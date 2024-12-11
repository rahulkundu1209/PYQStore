import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const RootLayout = () => {
  return (
    <>
      <NavBar/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default RootLayout
