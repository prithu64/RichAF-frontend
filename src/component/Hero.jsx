import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import Coin3D from '../component/Coin3D'
import {useNavigate} from "react-router"

function Hero() {
  const navigate = useNavigate()
  return (
 <div className="relative min-h-screen bg-white/85 dark:bg-black/90 w-full flex justify-center items-center">

  <div className="flex flex-col md:flex-row px-2 w-full max-w-6xl mx-auto">
      
      {/*left */}
      <div className="dark:text-white space-y-5 flex flex-col mx-auto  px-2 justify-center"> 
         <div className="flex flex-col lg:flex-row text-5xl md:text-6xl ">
            <h1>Your <span className="dark:text-green-400  bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent font-semibold italic">$Wealth</span>.</h1>
            <h1>Your Control</h1>
         </div>
         <div>
             <h1 className=" text-base md:text-xl dark:text-white/60">RichAF helps you track, optimize, and grow your finances — all in one place.</h1>
         </div> 
         <div className="space-x-4">
           <button onClick={()=>{navigate("/signup")}} className="border font-semibold bg-black dark:bg-transparent text-white hover:bg-black/70 dark:hover:bg-white dark:hover:text-black dark:border-white/30 w-[130px] py-2 cursor-pointer rounded-sm transition  duration-200">Get Started</button>
           <button onClick={()=>{navigate("/signin")}} className="border font-semibold dark:hover:bg-transparent dark:hover::border-white/60 dark:hover:text-white transition  duration-200 dark:bg-white/85 dark:text-black dark:border-white/30 w-[130px] py-2 cursor-pointer rounded-sm">Log In</button>  
         </div>   
      </div>

      {/*right */} 
       <div className="h-[300px] mx-auto  mt-10 md:mt-0">
        <Canvas camera={{ position: [0, 0, 3] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 0, 5]} intensity={1} />
          <Environment preset="studio" />
          <Coin3D />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        </Canvas>
      </div>
    </div>

   </div>
  )
}

export default Hero