import { useNavigate } from "react-router";
import Logo from "./Logo"
import { RiLogoutBoxLine } from "react-icons/ri";
import { DarkThemeContext } from "../contexts/DarkThemeContext";
import { useContext } from "react";
import { MdWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";


function AppBar() {
  
  const navigate = useNavigate()

  const handleLogOut = () =>{{
      localStorage.removeItem("token")
      navigate("/",{replace:true})
    }
  }

    
    const {isDark,setIsDark} = useContext(DarkThemeContext)
    
  
    const toggleDarkTheme = ()=>{
      if(isDark === "dark"){
        setIsDark("")
      }else{
        setIsDark("dark")
      }
      console.log("is dark: ",isDark)
    }

  return (
    <div className="pt-3  dark:text-white">
        <div className="justify-between items-center max-w-5xl mx-auto flex py-2 px-4 border dark:border-white/30 rounded-3xl">
             <div><Logo/></div>
             <div className="flex items-center gap-x-2"> 
                    
                 <button className="border p-2 rounded-full" onClick={toggleDarkTheme}>
                          {
                            isDark === 'dark'?<FaMoon size={20} />:<MdWbSunny  size={20}/>
                          } 
                  </button>


                <button onClick={handleLogOut} className="p-2.5 rounded-full border cursor-pointer"><RiLogoutBoxLine size={16} /></button>

             </div>       
        </div>
    </div>
   
  )
}

export default AppBar