import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import FreeBook from './components/FreeBook'
import Home from './components/home/Home'
import Course from './components/Course'
import {Navigate, Route ,Routes} from "react-router-dom"
import Courses from './components/courses/Courses'
import Signup from './components/Signup'
import Contact from './components/Contact'
import  { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'
function App() {
  const[authUser,SetAuthUser]=useAuth()
  console.log(authUser)


  return (
    <div>
     {/* <Home/>
     <Course/> */}
     <div className='dark:bg-slate-900 dark:text-white'>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={ authUser?<Courses/>: <Navigate to="/signup" />}/>
      <Route path='/SignUp' element={<Signup/>}/>
      <Route path='/contact' element={<Contact/>}/>
     </Routes>
     <Toaster/>
     </div>
    </div>
  )
}

export default App