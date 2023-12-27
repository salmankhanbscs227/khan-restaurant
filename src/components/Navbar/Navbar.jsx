import React from 'react'
import foodLogo from '../../assets/food-logo.png'
import { FaShoppingCart } from "react-icons/fa";

import DarkMode from './DarkMode';

const Navbar = () => {
  return (
    <div className=''>
        <div className="shadow-md bg-white dark:bg-gray-900
        dark:text-white duration-200  " >
          <div className='container py-3 px-2 sm:py-0'>
            <div className="flex justify-between item-center ">
            <div className='flex items-center mx-3'>
              <a href="#" className='flex items-center gap-2 text-2xl sm:text-3xl font-bold '>
                <img className='w-10 cursor-pointer' src= {foodLogo}alt="Foodie Zone" />
                Foodie 
              </a>

            </div>
            <div className='flex items-center gap-4 '>
              <div>
                <DarkMode/>
              </div>
              <ul className='hidden sm:flex gap-3 items-center'>
                <li className=''>
                  <a className='inline-block py-4 px-4 hover:text-primary' href="#">Home</a>
                </li>
                <li>
                  <a className='inline-block py-4 px-4 hover:text-primary' href="#">About</a>
                </li>
                <li>
                  <a className='inline-block py-4 px-4 hover:text-primary' href="#">Contact</a>
                </li>
              </ul>
              <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-300 flex gap-2 items-center'>
                
                Order
                <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer"/>
              </button>

            </div>
            </div>
            
            
          </div>
        </div>

    </div>
  )
}

export default Navbar;
