import { useState } from 'react'
import './styles/App.scss'
import Separator from "./components/Separator"
import HomeMain from "./components/HomeMain"
import HomeSide from './components/HomeSide'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
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
