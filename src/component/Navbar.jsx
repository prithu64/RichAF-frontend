import { useContext } from "react";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { MdWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { DarkThemeContext } from "../contexts/DarkThemeContext";



function Navbar({setIsOpen}) { 
  
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
    <div className="fixed top-0 z-50 w-full dark:text-white ">
      <div className="px-2 py-4">
        <div className="flex justify-between backdrop-blur-lg shadow-sm items-center py-2 max-w-sm sm:max-w-2xl md:max-w-3xl mx-auto border px-3 dark:border-white/30 rounded-full">
          {/* Logo */}
        <div className="font-semibold text-lg">RichAF</div>

        
        <div className="flex items-center gap-x-4">
           <button onClick={toggleDarkTheme}>
          {
            isDark === 'dark'?<FaMoon size={20} />:<MdWbSunny  size={20}/>
          } 
         </button>
          {/* how to ? */}
          <button onClick={()=>{setIsOpen(prev=>(!prev))}} className="cursor-pointer">
            <BsFillQuestionCircleFill size={25} />
          </button>
        </div>
        
        </div>
      </div>
    </div>
  );
}

export default Navbar;