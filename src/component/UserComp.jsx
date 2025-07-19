import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function UserComp() {
  
  const [users,setUsers] = useState([])
  const [filter,setFilter] = useState("")
  
  const token = localStorage.getItem("token")
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get("https://richaf-back.onrender.com/api/v1/user/bulk?filter="+ filter,{
      headers : {
        authorization : `${token}`
      }
    })
    .then(response =>{
      setUsers(response.data.user)
    })
  },[filter,token])

  return (
  
    <div className="px-2 pt-2 ">
        <h1 className="mb-1">Users</h1>
        <input type="search" onChange = {(e)=>{
          setFilter(e.target.value)
        }} placeholder="Search user" className="border-gray-400 border w-full outline-none px-2 py-1.5 rounded-md"/>
         
        {
          users.map((user)=>{
          return  <div key={user.id} className="flex justify-between mt-4 ">
                      <div className='flex gap-x-2 items-center'>
                          <h1 className='border rounded-full bg-green-400 text-xl text-white text-center  h-10 w-10 '>{user.username[0]}</h1>
                          <h1>{user.firstName} {user.lastName}</h1>
                      </div>
                      <button
                      onClick={()=>{
                        navigate("/sendmoney?id="+user.id+"&firstName="+user.firstName+"&lastName="+user.lastName)
                      }}
                      className="border px-2 text-white bg-slate-700 rounded-sm cursor-pointer" >Send Money</button>
                  </div>
          })
        }
       
    </div>
  )
}

export default UserComp