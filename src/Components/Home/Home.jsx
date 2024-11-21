import React, { useState } from 'react'
import HomeItem from '../HomeItem/HomeItem'
import avatar from "../../assets/avatar.svg"

export default function Home() {

    return <>
        <div className='text-center bg-[#1ABC9C] text-white min-h-[70vh] pt-5 pb-4'>
            <div className='w-[15rem] mx-auto'>
                <img src={avatar} alt="" />
            </div>
            <h1 className='text-[40px] font-bold'>START FRAMEWORK</h1>
            <div className='mb-4'>
                <i className='relative fas fa-star after:w-[70px] after:h-1 after:bg-white after:absolute after:top-1/2 after:left-6   '>
                    <div className='before:w-[70px] before:h-1 before:bg-white before:absolute before:top-1/2 before:right-6 before:ms-1'></div>
                </i>
            </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>

    </>
}
