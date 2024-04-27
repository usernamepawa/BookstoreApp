import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
  
  const[data,Setdata]=useState({email:"",password:""})
  
   const handleChange=(e)=>
   {
      if(e.target.name==="email")
      {
        Setdata({...data, email:e.target.value})
      }
      else{
        Setdata({...data, password:e.target.value})
      }
   }
   const handleAdd=()=>
   {
    if(data.email==="" || data.password===""){
    alert("PLEASE FILL LOGIN DETAILS")
  return
    }
  console.log(data)
   }

  return (
  <>
  <div>
  {/* You can open the modal using document.getElementById('ID').showModal() method */}
  
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form  method="dialog">
      {/* if there is a button in form, it will close the modal */}
      
      <Link  to="/"className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    </form>
    <h3 className="font-bold text-lg">Login</h3>
    <div className='mt-4 space-y-2'>
      <span>Email</span>
      <br></br>
      <input type='email' placeholder='Enter your email' name='email' value={data.email}
      onChange={handleChange} className='w-80 px-3 py-1 border rounded-md outline-none'/>
       
    </div>
    <div className='mt-4 space-y-2'>
      <span>Password</span>
      <br></br>
      <input type='password' placeholder='Enter your password' name="password" value={data.password} 
      onChange={handleChange} className='w-80 px-3 py-1 border rounded-md outline-none'
   />
  
    </div>
    <div className='flex justify-around mt-2'>
    <button  onClick={handleAdd}className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
<p>
  Not Registered ?{""}
  <Link  to='/SignUp'className='underline text-blue-500 cursor-pointer'>SignUp</Link>
</p>
  </div>
  </div>
  
</dialog>
</div>
  </>
  )
}

export default Login