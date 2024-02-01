import React, { useState,useContext } from 'react'
import OlxLogo from '../assets/olxLogo';
import SellButton from '../assets/SellButton'
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDown,IoMdArrowBack } from "react-icons/io";
import {auth} from '../FireBase/cofig'
import './Header.css'
import {NavLink, useNavigate} from 'react-router-dom'
import { AuthContext } from '../Context/Context';
import {  signOut } from "firebase/auth";

function Header(props) {
    const {
        isEmpty
        } = props
        const navigate=useNavigate()
        const {user} = useContext(AuthContext)
        
       
        const [showTooltip,setShowTooltip]=useState(false)

        const handleLogout = async()=>{
            try {
                await signOut(auth)
                navigate('/')
            } catch (error) {
                alert('somrthing went wrong')
            }
            
        }

        const background=isEmpty?'#F7F8F9':'white'
  return (

    <div className='header' style={{backgroundColor:background}}>
        {
            isEmpty?
            <NavLink to={"/"}><IoMdArrowBack className='m-6 text-2xl cursor-pointer' /></NavLink> :
            <div className='header-inner'>
                <div className='xl:max-w-[1280px] md:max-w-[960px] sm:max-w-[640px] max-w-full mx-auto flex '>

                    <div className='mr-4 '>
                    <NavLink to={"/"}> <OlxLogo  /></NavLink>
                    </div>
                    <div className='search-feald mr-4 py-0'>
                        <IoSearchOutline />
                        <input className='ml-3  text-[1rem]  outline-none' type="text" placeholder={"Andaman & Nicobar..."}/>
                        <IoIosArrowDown className='text-3xl ' />
                    </div>

                    <div className='search-feald p-0 w-full mr-4'>
                        <input className='w-full text-gray-900 text-[1rem] ml-3 outline-none' type="text" placeholder="Find Cars, Mobile Phones and more..." />
                        <div className='bg-gray-800 h-full flex items-center px-3 py-2'>
                        <IoSearchOutline className='text-white text-2xl' />
                        </div>
                    </div>
                    
                    <div className=' flex items-center text-sm font-bold text-gray-700'>
                        <span>ENGLISH</span>
                        <IoIosArrowDown className='text-4xl font-thin' />
                    </div>

                    <div className='flex items-center ml-4 font-bold text-gray-700 cursor-pointer'>
                       {user?
                       <>
                       <div className='relative'>
                       <span className='underline' onClick={()=>{
                        setShowTooltip((state)=>!state)
                       }} >{user.displayName}</span>
                        {showTooltip&&
                       <span className='cursor-pointer absolute bottom-[-200%] left-[-55%] bg-white py-2 px-6 rounded shadow-2xl hover:bg-[#C8F8F6]' onClick={handleLogout}>Logout</span>
                        }
                       </div>
                       
                       
                       </>
                        
                       : <NavLink to={'/login'} className='underline'>Login</NavLink>
                        }
                    </div>

                    <div className='ml-4'>
                        <SellButton />
                    </div>

                </div>
            </div>
        }
    </div>


  )
}

export default Header
