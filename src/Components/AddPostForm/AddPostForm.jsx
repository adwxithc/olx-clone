import React, { useContext, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { TbCameraPlus } from "react-icons/tb";
import { v4 as uuid } from 'uuid';
import {storage,db} from '../../FireBase/cofig'
import {AuthContext} from '../../Context/Context'

import {
    getDownloadURL,
    ref as storageRef,
    uploadBytes,
  } from "firebase/storage";
  import {
    collection,
    addDoc,
  } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

function AddPostForm() {
    const [brand, setBrand] =useState('')
    const [year, setYear] =useState('')
    const [title, setTitle] =useState('')
    const [description, setDescription] =useState('')
    const [price, setPrice] =useState('')
    const [location, setLocation] =useState('')
    const [image1, setImage1] =useState(null)
    const [image2, setImage2] =useState(null)
    const [image3, setImage3] =useState(null)

    const navigate = useNavigate()

    const {user} =useContext(AuthContext)

    const productsCollectionRef = collection(db, "products");
    const handlePost = () => {
        if(!user){
            alert('please login')
            navigate('/login')
            return
        }

        const uploadImage = (imageRef, image) => {
          return new Promise((resolve, reject) => {
            uploadBytes(imageRef, image)
              .then((snapshot) => {
                getDownloadURL(snapshot.ref)
                  .then((url) => {
                    resolve(url);
                  })
                  .catch((error) => {
                    reject(error.message);
                  });
              })
              .catch((error) => {
                reject(error.message);
              });
          });
        };
      
        const imageRef1 = storageRef(storage, `products/${image1.name}_${uuid()}`);
        const imageRef2 = storageRef(storage, `products/${image2.name}_${uuid()}`);
        const imageRef3 = storageRef(storage, `products/${image3.name}_${uuid()}`);
      
        Promise.all([
          uploadImage(imageRef1, image1),
          uploadImage(imageRef2, image2),
          uploadImage(imageRef3, image3),
        ])
          .then(async(urls) => {
            // Handle the URLs of the uploaded images here
            await addDoc(productsCollectionRef, {
                brand,
                year,
                title,
                description,
                price,
                location,
                urls,
                userId:user.uid,
                createdAt:(new Date).toString()
            });


            navigate('/')
          })
          .catch((error) => {
            console.log(error);
            alert('something went wrong')
          });
      };
      
  
    
  return (
    <div className='xl:max-w-[1280px] md:max-w-[960px] sm:max-w-[640px] max-w-full mx-auto p-3'>
        <div className='mt-16 w-2/3 text-[#002F34]  mx-auto'>
           <div className='flex justify-center text-2xl font-bold py-5'>
                <h1>POST YOUR AD</h1>
           </div>
            
            <div className='border border-gray-700-1 rounded-t-md p-8'>
                <h2 className='my-3 text-xl font-bold'>INCLUDE SOME DETAILS</h2>

                <div className='mb-7'>
                    <label htmlFor="brand">Brand*</label>
                    <div className='border border-[#002f34d7] rounded-md flex items-center w-1/2 p-3'>
                        <input value={brand} className='w-full outline-none ' type="text" name="" id="brand" onChange={(e)=>{setBrand(e.target.value)}} />
                        <IoIosArrowDown />
                    </div>
                </div>
                
                <div className='mb-7'>
                    <label htmlFor="year">Year*</label>
                    <div className='border border-[#002f34d7] rounded-md flex items-center w-1/2 p-3'>
                        <input value={year} className='w-full outline-none ' type="text" name="" id="year" onChange={(e)=>{setYear(e.target.value)}} />
                       
                    </div>
                </div>

                <div className='mb-7'>
                    <label htmlFor="title">Ad title*</label>
                    <div className='border border-[#002f34d7] rounded-md flex items-center w-1/2 p-3'>
                        <input value={title} className='w-full outline-none ' type="text" name="" id="title" onChange={(e)=>{setTitle(e.target.value)}} />
                       
                    </div>
                    <p className='text-xs text-gray-500'>Mention the key features of your item (e.g. brand, model, age, type)</p>
                </div>

                <div className='mb-7'>
                    <label htmlFor="description">Description*</label>
                    <div className='border border-[#002f34d7] rounded-md flex items-center w-1/2 p-3'>
                        <textarea value={description} className='w-full outline-none ' name="" id="description"  rows="3" onChange={(e)=>{setDescription(e.target.value)}}></textarea>
                        
                       
                    </div>
                    <p className='text-xs text-gray-500'>Include condition, features and reason for selling</p>
                </div>

            </div>

            <div className='border border-gray-700-1 p-8'>
                <h2 className='my-3 text-xl font-bold'>SET A PRICE</h2>
                <div className='mb-7'>
                    <label className='text-sm text-[#002f34d7]' htmlFor="description">Price*</label>
                    <div className='border border-[#002f34d7] rounded-md flex items-center w-1/2 p-3'>
                        <span className='border-r pr-3 border-gray-500'>&#8377;</span>
                     
                        <input value={price} className='w-full outline-none ' type="number" name="" id="year" onChange={(e)=>{setPrice(e.target.value)}} />
                        
                       
                    </div>
                </div>
            </div>

            <div className='border border-gray-700-1 p-8'>
                <h2 className='my-3 text-xl font-bold'>UPLOAD UP TO 20 PHOTOS</h2>
                <div className='grid grid-cols-4 gap-5 w-1/2'>
                    <div className='h-24 w-24 border border-gray-950' >
                        <label className='text-5xl cursor-pointer' htmlFor='pic1'>
                            {image1?
                            <img className='object-cover h-full w-full ' src={URL.createObjectURL(image1)} alt="" />:
                            <TbCameraPlus className='mx-auto h-full' />}
                            
                        </label>
                        <input type="file" id='pic1' className='invisible'  onChange={(e)=>{setImage1(e.target.files[0])}} />
                    </div>
                    <div className='h-24 w-24 border border-gray-950' >
                        <label className='text-5xl cursor-pointer' htmlFor='pic2'>
                            {image2?
                            <img className='object-cover h-full w-full ' src={URL.createObjectURL(image2)} alt="" />:
                            <TbCameraPlus className='mx-auto h-full' />}
                            
                        </label>
                        <input type="file" id='pic2' className='invisible'  onChange={(e)=>{setImage2(e.target.files[0])}} />
                    </div>
                    <div className='h-24 w-24 border border-gray-950' >
                        <label className='text-5xl cursor-pointer' htmlFor='pic3'>
                            {image3?
                            <img className='object-cover h-full w-full ' src={URL.createObjectURL(image3)} alt="" />:
                            <TbCameraPlus className='mx-auto h-full' />}
                            
                        </label>
                        <input type="file" id='pic3' className='invisible'  onChange={(e)=>{setImage3(e.target.files[0])}} />
                    </div>
                   
  
                </div>
            </div>

            <div className='border border-gray-700-1 p-8'>
            <h2 className='my-3 text-xl font-bold'>CONFIRM YOUR LOCATION</h2>
                <div className='mb-7'>
                    <label htmlFor="location text-xs">location*</label>
                    <div className='border border-[#002f34d7] rounded-md flex items-center w-1/2 p-3'>
                        <input value={location} className='w-full outline-none ' type="text" name="" id="location" onChange={(e)=>{setLocation(e.target.value)}} />
                       
                    </div>
                    
                </div>
            </div>

            <div className='border border-gray-700-1 p-8'>
                <button className='bg-[#D8DFE0] rounded-md p-3 font-bold text-[#7F9799]' onClick={handlePost}>Post now</button>

            </div>
         
           
        </div>
      
    </div>
  )
}

export default AddPostForm
