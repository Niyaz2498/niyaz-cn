import React, { useState, useEffect } from 'react'

const MenuItem = ({iconLight, iconDark, text, Selected, clickHandler}) => {
  var cname = Selected == text ? "MenuItemSelected": "MenuItem"
  const [dispIcon, setDispIcon] = useState(Selected == text ? iconDark : iconLight)
  useEffect(()=>{
    setDispIcon(Selected != text ? iconDark : iconLight)
  }, [Selected])
  return (
    <div className={cname} onClick={()=>{
      clickHandler(text);
    }}>
      <img src={dispIcon} alt="icon"/>
      <span>{text}</span>
    </div>
  )
}

export default MenuItem
