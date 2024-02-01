import React from 'react'
import './Footer.css'
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import appStore from "../../assets/Images/appstore.webp"
import playStore from "../../assets/Images/playstore.webp"

function Footer() {
  return (
    <>
    <div className='footer py-4  text-left'>
     <div className='grid grid-cols-5 gap-3  xl:max-w-[1280px] md:max-w-[960px] sm:max-w-[640px] max-w-full mx-auto '>
        <div className=''>
            <span className='text-sm font-bold text-gray-800 '>POPULAR LOCATIONS</span>
            <ul className='mt-3'>
                <li className='text-xs text-gray-500 mb-2'>Kolkata</li>
                <li className='text-xs text-gray-500 mb-2'>Mumbai</li>
                <li className='text-xs text-gray-500 mb-2'>Chennai</li>
                <li className='text-xs text-gray-500 mb-2'>Pune</li>
            </ul>
        </div>

        <div className=''>
            <span className='text-sm font-bold text-gray-800 '>TRENDING LOCATIONS</span>
            <ul className='mt-3'>
                <li className='text-xs footer-item mb-2'>Bhubaneshwar</li>
                <li className='text-xs footer-item  mb-2'>Hyderabad</li>
                <li className='text-xs footer-item mb-2'>Chandigarh</li>
                <li className='text-xs footer-item mb-2'>Nashik</li>
            </ul>
        </div>

        <div className=''>
            <span className='text-sm font-bold text-gray-800 '>ABOUT US</span>
            <ul className='mt-3'>
                <li className='text-xs footer-item mb-2'>Contact Us</li>
            
            </ul>
        </div>

        <div className=''>
            <span className='text-sm font-bold text-gray-800 '>OLX</span>
            <ul className='mt-3'>
                <li className='text-xs footer-item mb-2'>Help</li>
                <li className='text-xs footer-item mb-2'>Sitemap</li>
                <li className='text-xs footer-item mb-2'>Legal & Privacy information</li>
                <li className='text-xs footer-item mb-2'>Vulnerability Disclosure Program</li>
            </ul>
        </div>

        <div className='flex flex-col justify-between'>

            <div>
            <span className='text-sm font-bold text-gray-800 '>FOLLOW US</span>
            <ul className='mt-3 flex'>
                <li className='text-xl footer-item mr-2'><FaFacebookF /></li>
                <li className='text-md footer-item mr-2'><button className='border border-solid border-gray-500 rounded-full p-[0.1rem] font-semibold'><CiInstagram /></button></li>
                <li className='text-xl footer-item mr-2'><FaTwitter /></li>
                <li className='text-xl mr-2 footer-item'><FaRegCirclePlay /></li>
            </ul>
            </div>

            <div className='flex'>
                <img className='mr-3 cursor-pointer' src={appStore} alt="" />
                <img className='cursor-pointer' src={playStore} alt="" />
            </div>
        </div>

     </div>

    </div>

    <div className='bottom-footer'>
        <div className=' text-white text-xs xl:max-w-[1280px] md:max-w-[960px] sm:max-w-[640px] max-w-full mx-auto'>
            <div className='flex justify-between'>
            <div>
            Help - Sitemap
            </div>
            <div>
            All rights reserved © 2006-2024 OLX
            </div>
        </div>
        </div>
    </div>

    </>

  )
}

export default Footer
