import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/NavBar'
import LeftContent from './components/LeftContent'

function App() {
  return (
    <>
        <Navbar></Navbar>
        <LeftContent></LeftContent>
    </>
  )
}

export default App
