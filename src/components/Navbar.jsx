import React from 'react'
import Logo from "../assets/Logo.png"
import Searchbox from './Searchbox'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="LeftBox">
            <div className="LogoSpace">
                <img src={Logo} alt="Image description" />
                <span className="logoText">Protrack</span>
            </div>
            <div className="SearchSpace">
                <Searchbox></Searchbox>
            </div>
        </div>
        <div className="RightBox"></div>
    </div>
  )
}

export default Navbar
