import React, { useState } from 'react'
import Style from "./HomeItem.module.css"
export default function HomeItem({ id, img }) {
  const [modelSate, setmodelSate] = useState("hidden")
function displayModal(){
  setmodelSate("flex")
}
function hideModel(e){
  if (e.target == e.currentTarget) {
    setmodelSate("hidden")
  }
}


  return <>
    <div id={id} className="item relative group">
      <div>
        <div onClick={displayModal} className="cover text-[white] group-hover:bg-[#1abc9ce6] flex opacity-0 group-hover:opacity-100  duration-700 flex-wrap justify-center content-center  rounded-md  absolute top-0 right-0 left-0 bottom-0">
          <div >
            <i className='fas fa-plus text-[60px]'></i>
          </div>
        </div>
        <img className='w-full rounded-md' src={img} alt="" />
      </div>


      <div onClick={hideModel} id="popup-modal" tabindex="-1" class={`${modelSate} bg-[#0d6efd40] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 z-50 justify-center items-center md:inset-0`}>
        <div class="relative p-4">
          <div class="rounded-lg shadow dark:bg-gray-700 w-[37rem] ">
            <img className='w-full rounded-lg' src={img} alt="" />
          </div>
        </div>
      </div>
    </div>

  </>
}
