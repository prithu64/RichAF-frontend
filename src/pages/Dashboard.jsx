import { useSearchParams } from 'react-router-dom'
import AppBar from '../component/AppBar'
import BalanceComp from '../component/BalanceComp'
import UserComp from '../component/UserComp'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

function Dashboard() {
  const [searchParams] = useSearchParams()
  const username = searchParams.get("username")
  const [balance,setBalance] = useState(null)
  const token = localStorage.getItem("token")
  
  useEffect(()=>{
    console.log(token)
    const response = axios.get("https://richaf-back.onrender.com/api/v1/account/balance",{
    headers : {
      authorization : token
    }
   }).then((response)=>{
     if(response.data.success){
      setBalance(response.data.balance) 
     }
   })
  },[token,username])

  return (
    <div className='p-2 min-h-screen bg-gray-500/20  dark:bg-black/90 space-y-6  '>
        <AppBar username={username}/>
        <BalanceComp balance={balance} username={username}/>
        <UserComp />
    </div>
  )
}

export default Dashboard