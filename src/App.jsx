import React, { useEffect, useState } from 'react'
import Home from './Pages/Home'
import Header from './Components/Header'
import { ThemeContext } from './Context/ThemeContext'

const App = () => {
  const [theme,setTheme] = useState('Light')
  useEffect(()=>{
    setTheme(localStorage.getItem('theme'))
  },[])
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
    <div className={`${theme} ${theme == 'dark'? 'bg-[#121212]' : null}`}>
      <Header/>
      <Home/>
    </div>
    </ThemeContext.Provider>
  )
}

export default App