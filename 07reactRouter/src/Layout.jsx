import React from 'react'

import { Outlet } from 'react-router-dom'

import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'

function Layout() {
    return (
        <>
        <Header/>
        <Outlet/> {/*  point of change */}
        <Footer/>
        </>
    )
}

export default Layout
