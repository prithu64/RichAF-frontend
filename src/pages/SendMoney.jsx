import React, { useState } from 'react'
import FormHeading from '../component/FormHeading'
import FormBtn from '../component/FormBtn'
import { useSearchParams } from 'react-router'
import axios from 'axios'

function SendMoney() {
  const [searchParams] = useSearchParams()
  const [amount,setAmount] = useState(null);

  const firstName = searchParams.get("firstName")
  const lastName = searchParams.get("lastName")
  const to = searchParams.get("id");
  const token = localStorage.getItem("token")

  const handleSendMoney = (e)=>{
    e.preventDefault()  
    axios.post("https://richaf-back.onrender.com/api/v1/account/transfer",{
      amount: Number(amount),
      to 
    },{
      headers : {
        authorization : token
      }
    }
  ).then((response)=>{
    if(response.data.success){
      alert("Transfer successfull")
    }else{
      alert("Error during transfer")
    }
  })
  }
  

  return (
    <div className='flex justify-center items-center min-h-screen bg-slate-200'>
        <div className='border border-gray-500 px-4 py-6 rounded-xl shadow-lg bg-white'>
            <FormHeading  label={"Send Money"}/>
            <div className='flex gap-2 items-center mb-4'>
                <h1 className='border rounded-full bg-green-400 text-xl text-white text-center  h-10 w-10 '>{firstName[0]}</h1>
                <h1>{firstName} {lastName}</h1>
            </div>
           <input type='number' placeholder='Amount(₹)' className='border p-2 w-full rounded-md outline-none border-gray-500 mb-3'
           onChange={(e)=>{
            if(e.target.value >0){
              setAmount(e.target.value)
            }else{
              alert("Transfer amount should be more than 0")
            }
           }}
           />
           <FormBtn onClick={handleSendMoney} label={"Send money"} />
        </div>
    </div>
  )
}

export default SendMoney