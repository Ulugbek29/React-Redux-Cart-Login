import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/UI/Footer/Footer'
import Header from '../components/UI/Header/Header'

export default function MainLayout() {
  return (
    <div>
        <Header />

        <div className='flex w-full mt-[80px]'>
            <Outlet />
        </div>

        <Footer />
    </div>
  )
}
