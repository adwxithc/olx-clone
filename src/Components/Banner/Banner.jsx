import React from 'react'
import './Banner.css'
import { IoIosArrowDown } from "react-icons/io";
import BannerImage from '../../assets/Images/banner_copy.png'


function Banner() {
  return (
    <>
        <div className=' categories'>
            <div className='category-items mt-2'>
                <div className='flex items-center '>
                    <span className='text-sm font-bold text-gray-800'>ALL CATEGORIES</span>
                    <IoIosArrowDown className='text-3xl ' />
                </div>
                <div >
                    <span>Cars</span>
                    <span>Motorcycles</span>
                    <span>Mobile Phones</span>
                    <span>For Sale: Houses & Apartments</span>
                    <span>Scooters</span>
                    <span>Commercial & Other Vehicles</span>
                    <span>For Rent: Houses & Apartments</span>
                </div>
            </div>
        </div>
        <img className='w-full' src={BannerImage} alt="" />
    </>
  )
}

export default Banner
