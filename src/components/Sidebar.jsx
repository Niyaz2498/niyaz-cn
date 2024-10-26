import React, { useState } from 'react'
import Separator from './Separator'
import MenuItem from './MenuItem'
import Category from "../assets/Category-light.svg"
import Activity from "../assets/Activity-light.svg"
import Calendar from "../assets/Calendar-light.svg"
import Folder from "../assets/Folder-light.svg"
import CategoryDark from "../assets/Category.svg"
import ActivityDark from "../assets/Activity.svg"
import CalendarDark from "../assets/Calendar.svg"
import FolderDark from "../assets/Folder.svg"
import UpgradeBanner from './UpgradeBanner'
import dispProf from "../assets/DP.png"
import gearIcon from "../assets/Setting.svg"

const Sidebar = () => {
    const [selectedMenu, setSelectedMenu] = useState("Home")
    const handleMenuClick = (MenuName)=>{
        setSelectedMenu(MenuName)
    }
  return (
    <div className="column1">
      <div className='side-menu-list'>
        <MenuItem iconLight={Category} iconDark={CategoryDark} text="Home" Selected={selectedMenu} clickHandler={handleMenuClick} ></MenuItem>
        <MenuItem iconLight={Calendar} iconDark={CalendarDark} text="Calendar" Selected={selectedMenu} clickHandler={handleMenuClick} ></MenuItem>
        <MenuItem iconLight={Activity} iconDark={ActivityDark} text="Tasks" Selected={selectedMenu} clickHandler={handleMenuClick} ></MenuItem>
        <MenuItem iconLight={Folder} iconDark={FolderDark} text="Notes" Selected={selectedMenu} clickHandler={handleMenuClick} ></MenuItem>
      </div>
      <Separator></Separator>
      <div className='sm-extras'>
        <UpgradeBanner></UpgradeBanner>
        <div className="UserBadgeHolder">
            <div className="UserBadge">
                <img src={dispProf} alt="display profile"/>
                <div className="UserDetailHolder">
                    <span>Dalton Smith</span>
                    <span>Free Account</span>
                </div>
                <img className="setting" src={gearIcon} alt="settings" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
