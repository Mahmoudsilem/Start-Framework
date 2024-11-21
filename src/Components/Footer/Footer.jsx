import React from 'react'
import Style from "./Footer.module.css"
export default function Footer() {
  return <>
    <footer className='text-white text-center'>
      <section className=' bg-[#2C3E50] py-16 '>
        <div className='container mx-auto md:grid grid-cols-3 py-16'>
          <div>
            <h2 className='text-3xl font-medium pb-1'>LOCATION</h2>
            <p className='pb-3'>2215 John Daniel Drive</p>
            <p>Clark, MO 65243  </p>
          </div>
          <div className='pb-3'>
            <h2 className='text-3xl font-medium pb-2'>AROUND THE WEB</h2>
            <div className='flex gap-x-2 justify-center '>
              <a className='border border-white border-1 rounded-full p-1 w-8 h-8 flex flex-wrap justify-center content-center focus:border-white' href='#'><i className='fab fa-facebook'></i></a>
              <a className='border border-white border-1 rounded-full p-1 w-8 h-8 flex flex-wrap justify-center content-center focus:border-white' href='#'><i className='fab fa-twitter'></i></a>
              <a className='border border-white border-1 rounded-full p-1 w-8 h-8 flex flex-wrap justify-center content-center focus:border-white' href='#'><i className='fab fa-linkedin'></i></a>
              <a className='border border-white border-1 rounded-full p-1 w-8 h-8 flex flex-wrap justify-center content-center focus:border-white' href='#'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              </a>
            </div>
          </div>
            <div className='pb-3'>
              <h2 className='text-3xl font-medium'>ABOUT FREELANCER</h2>
              <p>Freelance is a free to use, licensed tailwindcss theme created by Mahmoud selim</p>
            </div>
        </div>
      </section>

      <section className='bg-[#0C1115] py-5'>
        <h6>Copyright © Your Website 2024</h6>
      </section>
    </footer>
  </>
}
