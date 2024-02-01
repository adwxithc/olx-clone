import React from 'react'
import SellButtonPlus from './SellButtonPlus'
import {NavLink}from 'react-router-dom'

function SellButton() {
const style={borderLeft:"7px solid #FFCE32",borderRight:"7px solid #FFCE32",borderTop:"7px solid #23E5DB",borderBottom:"7px solid #3A77FF",boxShadow:"1px 3px 5px 1px rgba(0,0,0,0.2)"}
  return (
    <NavLink to={'/post'}>
    <button className=' h-[48px] w-[104px] text-sm text-gray-700 rounded-full font-bold' style={style}>
        <SellButtonPlus className=""/> <span>SELL</span> 
    </button>
    </NavLink>
  )
}

export default SellButton
