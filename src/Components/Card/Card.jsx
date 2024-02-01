import React,{useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import {PostsContext} from '../../Context/PostsContext'
import { FaRegHeart } from "react-icons/fa";

export default function Card(props) {
  const{
    product
  }=props
  const {postDetails,setPostDetails} = useContext(PostsContext)
  const navigate=useNavigate()
  const handleClick=()=>{
    setPostDetails(product)

    navigate('/view',{state:{product}})
  }
  return (
    <div className='card xl:h-[266px] md:h-[85px] border-solid border p-2 border-gray-300 rounded-md cursor-pointer mb-1' onClick={handleClick}>
      <div className='product-image-container h-[160px] w-full bg-cover bg-no-repeat bg-center relative' style={{backgroundImage: `url(${product.urls[0]})`}}>
        <button className='bg-white rounded-full p-2 text-xl absolute right-1 top-1'>
            <FaRegHeart />
        </button>
       
      </div>
      <div className='flex flex-col p-3'>
        <span className='text-xl font-semibold text-left'>{product.price}</span>
        <p className='text-gray-500 text-left text-md my-1'>{product.title}</p>
        <div className='flex justify-between'>
        <p className='text-gray-500 text-left text-xs mt-auto'>{product.brand}</p>
        <p className='text-gray-500 text-left text-xs mt-auto'>{new Date(product.createdAt).toLocaleDateString('en-US', {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
})}</p>
        </div>
        

      </div>
    </div>
  );
}
