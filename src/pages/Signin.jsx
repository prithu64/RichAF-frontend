import { useState } from "react";
import BottomComp from "../component/BottomComp";
import FormBtn from "../component/FormBtn";
import FormHeading from "../component/FormHeading";
import InputComp from "../component/InputComp";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { replace,useNavigate } from "react-router";

const Signin = () => {
    
    const [username,setUsername] = useState(null)
    const [password,setPassword]   = useState(null)
    const [passwordState,setPasswordState] = useState("password")
    const [eyeIconVisibility,setEyeIconVisibility] = useState(false)
    const [btnText,setBtnText] = useState("Sign up")
    const navigate  = useNavigate()
  
     const togglePasswordVisibility = (e)=>{
    e.preventDefault()
    if(passwordState === "password"){
      setPasswordState("text")
      setEyeIconVisibility(true)
    }else{
      setPasswordState("password")
      setEyeIconVisibility(false)
    }}

    const handleSignin = async(e)=>{
      setBtnText("Signing in...")
       e.preventDefault()
       if((username && password) === null){
         alert("Input required")
         setBtnText("Sign in")
         return;
       }
       const response = await axios.post("https://richaf-back.onrender.com/api/v1/user/signin",{
        username,
        password
       }).then((response)=>{
        console.log(response.data.message)
        if(response.data.success){
          localStorage.setItem("token",response.data.token)
          setBtnText("Sign in")
          alert("Signed in successfully")
          navigate("/dashboard?username="+ username ,{replace : true})
        }else{
          setBtnText("Sign in")
          alert("User doesn't exist ")
        }
       })
    }
 

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">

       <FormHeading label={"Sign in to your account"} />
        <form className="space-y-4">
          
          <InputComp label={"Username"} onChange={(e)=>{
             setUsername(e.target.value)
          }}  type={"text"}  placeholder={"Enter your username"} />
          
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
       
          <FormBtn label={btnText} onClick={handleSignin} />  
         
          <BottomComp text={"Don't have an account ?"} to={"/signup"} Pagelabel={"Sign Up"}/>

        </form>
      </div>
    </div>
  );
};

export default Signin;