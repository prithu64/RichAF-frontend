import { useState } from "react";
import HowItWorksModal from "../component/HowItWorks";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";

function Landing() {
  const [showHowItWorks, setShowHowItWorks] = useState(false);
 
  return (   
    <div>
      <Navbar/>
      <Hero/>
    </div>
  



  )
}

export default Landing