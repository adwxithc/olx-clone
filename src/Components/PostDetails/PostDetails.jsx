import React,{useEffect,useContext, useState} from 'react'
import {PostsContext} from '../../Context/PostsContext'
import { GoShareAndroid } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { FirebaseContext } from '../../Context/Context'
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useLocation } from 'react-router-dom';


function PostDetails() {
    // const {postDetails} =useContext(PostsContext)
    
    const {db}=useContext(FirebaseContext)
    const [sellerDetails, setSellerDetails]=useState()
    const {state}=useLocation()
     const {product}= state
     const postDetails=product
     const [mainImage , setMainImage] = useState(postDetails.urls[0])


    useEffect(()=>{
        
    const productsCollectionRef=query(collection(db,'users'),where('id','==',postDetails.userId))
      const getSeller=async()=>{
        try {
            const snapshot=await getDocs(productsCollectionRef)
            const docs=snapshot.docs
            
            docs.forEach((doc)=>{
                const data=doc.data()
                
                setSellerDetails(data)
            })
            
        } catch (error) {
            console.log(error);
        }

      }

      getSeller()
    },[])
  return (
    <div className=' bg-[#F2F4F5] h-full py-5'>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-3 mt-[5rem] xl:max-w-[1280px] md:max-w-[960px] sm:max-w-[640px] max-w-full mx-auto p-3 '>
            <div className='w-full h-full md:col-span-2'>
              
                <div className='h-auto rounded-md bg-white border border-gray-300 overflow-hidden'>
                    <div className='w-full h-[500px]  bg-black' >
                        <img className='object-contain h-full w-full  ' src={mainImage} alt="product pic" />
                    </div>
                    <div className='flex  px-[16px]   my-[15px]'>
                        {postDetails?
                        postDetails.urls.map((url,i)=>
                            <button key={i} className='h-[57px] w-[60px] bg-cover bg-no-repeat bg-center rounded-md mr-10 border-2 border-black' style={{backgroundImage:`url(${url})`}}
                                onClick={()=>{
                                    setMainImage(url)
                                }}
                            ></button>
                        ):""
                        }
                        
                    </div>
                </div>

                <div className=' rounded-md bg-white border border-gray-300 overflow-hidden p-4 text-[#002F34]'>
                    <div>
                        <h2 className='text-xl font-bold '>Details</h2>
                        <div className='grid grid-cols-2'>
                            <ul className='my-5 text-sm'>
                                <li className='flex justify-between'><span>Branbd</span> <span>{postDetails?postDetails.brand:''}</span></li>
                            </ul>
                        </div>
                        <hr />

                        <div>
                            <h2 className='text-xl font-bold mt-4'>Description</h2>
                            <p className='text-md my-3'>
                                {postDetails?postDetails.description:''}
                            
                            </p>
                        </div>

                    </div>
                </div>
            
           
            </div>
            <div className='w-full'>
                <div className='bg-white rounded-sm border border-gray-300 overflow-hidden p-4 mb-2'>
                    <div className='flex justify-between text-xl'>
                        <div className='font-bold text-4xl text-[#002F34]'>
                            <span>&#8377;{postDetails?postDetails.price:''}</span>
                        </div>
                        <div className='flex'>
                            <button className='px-3'>
                                <GoShareAndroid />
                            </button>
                            <button className='px-3'>
                                <FaRegHeart />
                            </button>
                            
                            
                        </div>



                    </div>
                    <div className='text-[#406367] py-3'>
                        <p>{postDetails?postDetails.title:''}</p>
                    </div>

                    <div className='grid grid-cols-4 text-[#406367] pt-3 text-xs gap-8'>
                        <div className='col-span-3'>
                            <p>{postDetails?postDetails.location:''}</p>
                        </div>
                        <div className='col-span-1'>
                            <p>{postDetails?new Date(postDetails.createdAt).toLocaleDateString('en-US', {
                                                                                                        weekday: 'short',
                                                                                                        year: 'numeric',
                                                                                                        month: 'short',
                                                                                                        day: 'numeric',
                                                                                                        }):""}</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-sm border border-gray-300 overflow-hidden p-4 mb-2'>
                    <div className='flex items-center'>
                        <div className='h-16 w-16 bg-cover rounded-full' style={{backgroundImage:"url(https://apollo.olx.in:443/v1/files/6gpbnk3mo4u02-IN/image)"}}>

                        </div>
                        <div className='flex justify-between flex-1 text-xl font-bold p-2'>
                            <h2 className=''>{sellerDetails?sellerDetails.name:''}</h2>
                            <IoIosArrowForward  className='text-2xl' />
                        </div>

   
                    </div>
                    <button className='w-full border-2 hover:border-4 rounded-md border-black p-3 '>
                            <span className='font-bold'>Chat with seller</span>
                    </button>
                    <div>
                        <div className='flex justify-center items-center mt-5'>
                            <IoCallOutline className='text-2xl mr-2' />
                           
                            <span className=' text-xs mr-2'>** *** ****</span>
                            
                            
                            
                            <a className='text-blue-500 text-xs underline ' href="#" >Show number</a>
                        </div>
                    </div>

                </div>

                <div className='bg-white rounded-sm border border-gray-300 overflow-hidden p-4'>
                    
                    <span className='text-xl font-bold text-[#002F34] '>Posted in</span>
                    <p className='text-xs py-3 text-[#406367]'>{postDetails?postDetails.location:''}</p>

                    
                </div>

            </div>


        
        </div>
    </div>

  )
}

export default PostDetails
