import React from 'react'
import Nav from '../components/navbar/Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'

const AppLayout = () => {
  return (
    <main className='min-h-[100vh] w-full bg-slate-400'>
        <Nav/>
        <Outlet/>
        <Footer/>
    </main>
  )
}

export default AppLayout