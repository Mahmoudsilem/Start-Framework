import React from 'react'
import Style from "./Layout.module.css"
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
export default function Layout() {
  return <>
    {/* <div className='container mx-auto'> */}

    <Navbar />
    <main className='min-h-[70vh]'>
      <Outlet></Outlet>
    </main>
    <Footer />

    {/* </div> */}
  </>
}
