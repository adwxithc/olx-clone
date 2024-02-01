import React, { useState, useEffect, useContext } from 'react'
import './Posts.css'
import Card from '../Card/Card'
import { FirebaseContext } from '../../Context/Context'
import {
  collection,
  getDocs,
 
} from "firebase/firestore";


function Posts() {

  const [products, setProducts]= useState([])
  const {db} =useContext(FirebaseContext)
  const productsCollectionRef= collection(db,'products')
  useEffect(()=>{
    const getProducts = async () => {
      
      const snapshot=await getDocs(productsCollectionRef)
      const arr= snapshot.docs.map(doc=>({...doc.data(),id:doc.id}))
      setProducts(arr)
     
    };
    getProducts()
    
  },[])
  return (
    <div className='xl:max-w-[1280px] md:max-w-[960px] sm:max-w-[640px] max-w-full mx-auto'>
        <div className='post-title flex'>
            <h2 className='text-2xl my-3'>Fresh recommendations</h2>
        </div>
        <div className='post-items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
          {products.map(product=><Card product={product} key={product.id} />)}
            
         
        </div>
    </div>
  )
}

export default Posts
