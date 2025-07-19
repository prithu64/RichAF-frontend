import { useNavigate } from "react-router";
import Logo from "./Logo"
import { RiLogoutBoxLine } from "react-icons/ri";

function AppBar({username}) {
  
  const navigate = useNavigate()

  const handleLogOut = () =>{{
      localStorage.removeItem("token")
      navigate("/",{replace:true})
    }
  }

  return (
    <div className="pt-3">
        <div className="justify-between items-center flex py-2 px-4 border rounded-3xl">
             <div><Logo/></div>
             <div className="flex items-center gap-x-2"> 
                <h1>hello</h1>
                <h1 className="px-3 py-1 rounded-full bg-gray-300">{username[0]}</h1>  
                <button onClick={handleLogOut} className="p-2 rounded-full bg-gray-300 cursor-pointer"><RiLogoutBoxLine size={16} /></button>
             </div>       
        </div>
    </div>
   
  )
}

export default AppBar