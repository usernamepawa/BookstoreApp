import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

function Logout() {
    const[authUser,SetAuthUser]=useAuth()
   
    const handleLogout=()=>
    {
        try{
            SetAuthUser({
            ...authUser,
            user:null

        })
        localStorage.removeItem("Users")
        toast.success("Logout Successfully")
      
        setTimeout(()=>{
         
          window.location.reload()
         
        },3000)
        window.location.reload()
    }
        catch(error){
         toast.error("Error"+error.message)
         setTimeout(()=>{},3000)
        }
    }



  return (
    <>
    <button onClick={handleLogout} className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'>Logout</button>
    
    </>
  )
}

export default Logout