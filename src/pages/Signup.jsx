import FormBtn from "../component/FormBtn";
import FormHeading from "../component/FormHeading";
import InputComp from "../component/InputComp";
import BottomComp from "../component/BottomComp";
import axios from "axios";
import { useState } from "react";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { replace, useNavigate } from "react-router";

const Signup = () => {
  
  const [firstName,setfirstName] = useState("")
  const [lastName,setlastName]   = useState("")
  const [username,setUsername]   = useState("")
  const [password,setPassword]   = useState("")
  const [balance,setBalance]     = useState(null)
  const [passwordState,setPasswordState] = useState("password")
  const [eyeIconVisibility,setEyeIconVisibility] = useState(false)
  const navigate = useNavigate()
 
  const togglePasswordVisibility = (e)=>{
    e.preventDefault()
    if(passwordState === "password"){
      setPasswordState("text")
      setEyeIconVisibility(true)
    }else{
      setPasswordState("password")
      setEyeIconVisibility(false)
    }}



  const handleSignUp = (e)=>{
    e.preventDefault()
   const response = axios.post("https://richaf-back.onrender.com/api/v1/user/signup",{
      username,
      firstName,
      lastName,
      password,
      balance : Number(balance)
    }).then((response)=>{
      localStorage.setItem("token",response.data.token)
      alert("Sign up successfull")
      navigate("/dashboard?username="+ username ,{replace : true})
    }).catch((err)=>{
      alert("Error in sign in",err)
    })  
  }

  return (
    
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
       <FormHeading label={"Create an account"} />
        <form className="space-y-4">
          
          <InputComp label={"Username"}   type={"text"}  placeholder={"Enter your username"} 
           onChange={(e)=>{
            setUsername(e.target.value)
           }}
           />
          <InputComp label={"First Name"} type={"text"}  placeholder={"Enter first name"} 
           onChange={(e)=>{
            setfirstName(e.target.value)
           }}/>
          <InputComp label={"Last Name"}  type={"text"}  placeholder={"Enter last name"} 
           onChange={(e)=>{
            setlastName(e.target.value)
           }}
          />
          
          {/*password component*/}
          <div className="relative">
             <InputComp label={"Password"}  type={passwordState}  placeholder={"Enter password"} 
           onChange={(e)=>{
            setPassword(e.target.value)
           }}
          />
             <button onClick={togglePasswordVisibility} className="absolute top-[65%] right-3 transform -translate-y-1/2 ">
              {eyeIconVisibility ? <FaEye size={20} />:<FaEyeSlash size={20} />}
             </button>
          </div>
          
          
               <InputComp label={"Balance"}  type={"number"}  placeholder={"starting balance"} 
          onChange={(e)=>{
            if(e.target.value > 0 ){
              setBalance(e.target.value)
            }else{
              alert("Balance >= 1")
            }
          }}
          />
         
          <FormBtn label={"Sign up"} onClick={handleSignUp} />  
          
          <BottomComp text={"Already have an account ?"} Pagelabel={"Sign In"} to={"/signin"}/>
        </form>
      </div>
      
    </div>
  );
};

export default Signup;

