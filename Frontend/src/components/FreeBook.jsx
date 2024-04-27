import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//import list from "../list.json"
import Card from './Card';
import axios from "axios"
import { useState,useEffect } from 'react';
function FreeBook() {
    const[book,setBook]=useState([])
    useEffect(()=>
 {
    const getBook=async()=>{
 
     try{
      const res=await axios.get("http://localhost:4001/book")
      const data=res.data.filter((data) => data.category === "free")
      console.log(data)
      setBook(res.data)
     }
     catch(error)
     { 
         console.log(error)
 
     }
    }
 
 
 getBook()
 
 },[])
   
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (

        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-20 px-5 '>
                <div>
                    <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>

                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                    </p>
                </div>
                <div >
                    <Slider {...settings}>
                        {
                           book.map((item) => (
                                <Card item={item} key={item.id} />
                            ))
                        }
                    </Slider>


                </div>

            </div>



        </>
    )
}

export default FreeBook