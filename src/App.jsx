import { useState } from 'react'
import './styles/App.scss'
import Separator from "./components/Separator"
import HomeMain from "./components/HomeMain"
import HomeSide from './components/HomeSide'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar/>
    <div className='mainContentHolder'>
      <Sidebar></Sidebar>
      <HomeMain></HomeMain>
      <HomeSide></HomeSide>
    </div>
    </>
  )
}

export default App
