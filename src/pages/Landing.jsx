import { useState } from "react";
import HowItWorksModal from "../component/HowItWorks";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

function Landing() {
  const [isOpen,setIsOpen] = useState(false)
 
  return (   
    <div className="min-h-screen flex flex-col bg-gray-500/25 dark:bg-black/90">
      <Navbar setIsOpen={setIsOpen}/>
      <main className="flex-grow">
        <Hero/>    
      </main> 
      <HowItWorksModal isOpen={isOpen} onClose={()=>{setIsOpen(false)}} />
      <Footer/>
    </div>
  



  )
}

export default Landing