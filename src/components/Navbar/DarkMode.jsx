import React, { useState } from 'react'
import darkPng from "../../assets/website/dark-mode-button.png"
import lightPng from "../../assets/website/light-mode-button.png"
const DarkMode = () => {
  const [theme, setTheme] = React.useState(localStorage.getItem("item")
  ?localStorage.getItem("item"): "light");
  const element =  document.documentElement;
  React.useEffect(  ()=> {
    if (theme=="dark"){
      element.classList.add("dark");
      localStorage.setItem("theme","dark");
    }
    else{
      element.classList.remove("dark");
      localStorage.setItem("theme","light");
    }
  },[theme])

  const changeTheme =() =>{
    if (theme=="light"){
      setTheme("dark");
    }
    else
    {
      setTheme("light");
    }
  }

  return (  
    <div className='relative'>
      <img src={darkPng} onClick={changeTheme} className={`w-12 cursor-pointer absolute  right-0 z-10 
      drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${theme != "dark"?"opacity-0": "opacity-100"}` } alt="" />
      <img src={lightPng} onClick={changeTheme} className='w-12 cursor-pointer
       drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300' alt="" />
    </div>
  )
}


export default DarkMode
