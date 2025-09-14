"use client"


import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function MainLayout({children}) {
  return(
    <>
 <nav><Navbar/></nav>
 <main>{children}</main>
 <footer><Footer/></footer>
  </>
  );
}
