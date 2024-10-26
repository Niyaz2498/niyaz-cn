import React, { useState, useEffect } from 'react'
// import ico from "../assets/Activity.svg"
// import ico from "../assets/Activity-light.svg"

const MenuItem = ({iconLight, iconDark, text, Selected, clickHandler}) => {
  // const [menuSelected, setMenuSelected] = useState(Selected)
  var cname = Selected == text ? "MenuItemSelected": "MenuItem"
  const [dispIcon, setDispIcon] = useState(Selected == text ? iconDark : iconLight)
  // console.log("cname")
  // console.log(cname)
  useEffect(()=>{
    setDispIcon(Selected != text ? iconDark : iconLight)
  }, [Selected])
  return (
    <div className={cname} onClick={()=>{
      clickHandler(text);
      // setDispIcon(Selected != text ? iconDark : iconLight)
      // console.log("Selected")
      // console.log(Selected)
      // setMenuSelected(!menuSelected)

    }}>
      <img src={dispIcon} alt="icon"/>
      <span>{text}</span>
    </div>
  )
}

export default MenuItem
