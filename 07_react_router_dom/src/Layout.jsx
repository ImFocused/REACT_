// we have created this file becoz we dont want to reload header and footer again and again just the layout will change and above and below part remains same 

import React from 'react'
import Header from './components/Header/Header_temp'
import Footer from './components/Footer/Footer'
import {Outlet} from 'react-router-dom' // this is the component that will be used to render the changing part of the layout

export default function Layout(){
    return(
        <>

        <Header/>
         <Outlet/> {/*this will be the changing part  */}
        <Footer/>
        </>
    )
}

