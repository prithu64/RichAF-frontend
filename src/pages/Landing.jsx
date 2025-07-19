import { useState } from "react";
import {useNavigate} from "react-router"
import HowItWorksModal from "../component/HowItWorks";

function Landing() {
  const [showHowItWorks, setShowHowItWorks] = useState(false);
  const navigate = useNavigate()
  return (
  <div
  className="relative h-screen w-full flex justify-center items-center shadow-2xl px-1  bg-gradient-to-br from-[#a28fed] via-[#5149a9] to-[#24243e] "
  //style={{ backgroundImage: `url(${heroBg})` }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Hero Content */}
  <div className="relative z-10 flex flex-col justify-center items-center lg:py-20 lg:px-20 border text-white max-w-xl bg-white/10 backdrop-blur-xl  border-white/20 p-8  rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
    <h1 className="text-7xl font-carattere mb-4">
      RichAF
    </h1>
    <p className="text-lg sm:text-xl md:text-2xl  mb-8">
      Because You Deserve to Feel Rich
    </p>

    <div className="space-x-4">
     <button onClick={()=>{
        navigate("/signup")
    }}  className="px-5 py-3 md:px-8 cursor-pointer  bg-gradient-to-r from-white/80 to-white/90 text-black font-medium tracking-wide shadow-lg hover:from-white hover:to-white hover:scale-105 transition-all duration-300 ease-in-out">
      Get Started
    </button>
    <button onClick={()=>{
        setShowHowItWorks(true)
    }}  className="px-5 py-3 md:px-8 cursor-pointer  bg-gradient-to-r from-white/80 to-white/90 text-black font-medium tracking-wide shadow-lg hover:from-white hover:to-white hover:scale-105 transition-all duration-300 ease-in-out">
      How it works
    </button>
    </div>
    
   


  </div>
   <HowItWorksModal 
    isOpen={showHowItWorks}
    onClose={()=>setShowHowItWorks(false)}
    />
</div>

  )
}

export default Landing