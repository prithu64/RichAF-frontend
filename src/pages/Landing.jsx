import { useState } from "react";
import HowItWorksModal from "../component/HowItWorks";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";

function Landing() {
  const [isOpen,setIsOpen] = useState(false)
 
  return (   
    <div>
      <Navbar setIsOpen={setIsOpen}/>
      <Hero/>
      <HowItWorksModal isOpen={isOpen} onClose={()=>{setIsOpen(false)}} />
    </div>
  



  )
}

export default Landing