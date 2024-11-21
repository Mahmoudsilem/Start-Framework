import React, { useState } from 'react'
import Style from "./Portfolio.module.css"
import Pic1 from "../../assets/port1.png"
import Pic2 from "../../assets/port2.png"
import Pic3 from "../../assets/port3.png"
import HomeItem from '../HomeItem/HomeItem'
export default function Portfolio() {
  const [imags, setImages] = useState([
    {id:1, img:Pic1},
    {id:2, img:Pic3},
    {id:3, img:Pic2},
    {id:4, img:Pic3},
    {id:5, img:Pic2},
    {id:6, img:Pic1},
])
return <>
    <div className='container mx-auto my-6'>
        <div className="grid md:grid-cols-3 gap-8">
            {imags.map((img)=><HomeItem id={img.id} img={img.img}/>)}
        </div>
    </div>
</>
}
