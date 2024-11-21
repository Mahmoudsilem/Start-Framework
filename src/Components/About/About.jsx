import React from 'react'
import Style from "./About.module.css"
export default function About() {
  return <>
  <div className='bg-[#1ABC9C] text-white text-center min-h-[70vh] flex flex-wrap justify-center content-center' >

    <div className='container mx-auto w-4/5'>
      <h1 className='text-2xl font-bold'>ABOUT SECTION</h1>
      <div className=''> 
      <i className='relative fas fa-star after:w-[70px] after:h-1 after:bg-white after:absolute after:top-1/2 after:left-6   '>
      <div className='before:w-[70px] before:h-1 before:bg-white before:absolute before:top-1/2 before:right-6 before:ms-1'></div>
      </i>
      </div>

      <div className="container mx-auto grid grid-cols-2 gap-x-10 mt-4 text-start">

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat, voluptas quam unde provident iure maiores aspernatur corporis? In, harum?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat, voluptas quam unde provident iure maiores aspernatur corporis? In, harum?</p>
      </div>
    </div>
  </div>
  </>
}
