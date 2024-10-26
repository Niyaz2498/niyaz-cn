import React from 'react'
import Logo from "../assets/Logo.png"
import Searchbox from './Searchbox'
import plusSymbol from "../assets/Path_34201.svg"
import dp from "../assets/DP.png"

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
        <div className="RightBox">
            <div className="AddTaskBtn">
                <img src={plusSymbol} alt="Plus Symbol" /> 
                <span className="AddTaskText">ADD TASKS</span>
            </div>
            <div className="NotificationBtn"></div>
            <img src={dp} alt="ProfilePic" />
        </div>
    </div>
  )
}

export default Navbar
