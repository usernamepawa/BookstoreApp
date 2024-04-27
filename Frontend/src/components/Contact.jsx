import React from 'react'
import { Link } from 'react-router-dom'
function Contact() {
   
    
  return (
    <>
   
   <div className='flex h-screen items-center justify-center'>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}

        <div className='w-[600px]'>
          <div className='modal-box'>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}

              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
           
            <h3 className="font-bold text-lg">Contact Us</h3>
            <div className='mt-4 space-y-2'>
              <span>Name</span>
              <br></br>
              <input type='name' placeholder='Enter your name' 
             className='w-80 px-3 py-1 border rounded-md outline-none' />
            </div>
           
            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br></br>
              <input type='email' placeholder='Enter your email' 
              className='w-80 px-3 py-1 border rounded-md outline-none' />
            </div>
           
            <div className='mt-4 space-y-2'>
              <span>Message</span>
              <br></br>
              <textarea    className='w-80 px-3 py-1 border rounded-md outline-none'>
            </textarea>
            </div>
            <div className='flex justify-around mt-2'>
              <button className='bg-pink-500 text-white rounded-md  pl-3 px-3 py-1 hover:bg-pink-700 duration-200'>Submit</button>
             
            </div>
            </form>
          </div>
     

        </div>
      </div>
  
    
    </>
  )
}

export default Contact