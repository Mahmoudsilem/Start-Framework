import React, { useState } from 'react'
import styles from './Navbar.module.css'

import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
const [navbarState, setNavbarState] = useState("hidden")
  function toggleNavbar() {
    if (navbarState == "hidden") {
      setNavbarState("")
    }else{
      setNavbarState("hidden")
    }
  }
  return <>    

<nav class="bg-[#2C3E50] border-gray-200 dark:bg-gray-900">
  <div class="container flex flex-wrap items-center justify-between mx-auto px-4 py-6">
    <Link to="" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">START FRAMEWORK
        </span>
    </Link>
    <button onClick={toggleNavbar} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class={`${navbarState} transition-all duration-300 ease-in-out w-full md:block md:w-auto`} id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
        <li>
          <NavLink to="about" class="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 " aria-current="page">About</NavLink>
        </li>
        <li>
          <NavLink to="portfolio" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="contact" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

  </>
}
