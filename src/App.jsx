import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import Landing from './pages/Landing'
import SendMoney from './pages/SendMoney'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { DarkThemeContext } from './contexts/DarkThemeContext'

function App() {
  const [isDark,setIsDark] = useState("dark")
  return (
    <>
    <DarkThemeContext.Provider value={{isDark,setIsDark}}>
        <div className={`${isDark}`}>
        <BrowserRouter>
         <Routes>
           <Route path='/' element = {<Landing/>} />
           <Route path='/signup' element = {<Signup/>} />
           <Route path='/signin' element = {<Signin/>} />
           <Route path='/dashboard' element = {<Dashboard/>} />
         <Route path='/sendmoney' element = {<SendMoney/>} />
         </Routes>
     </BrowserRouter>
     </div> 
    </DarkThemeContext.Provider>
    
    
    </>
  )
}

export default App
