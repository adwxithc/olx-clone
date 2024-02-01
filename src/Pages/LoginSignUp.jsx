import React, { useState, useContext } from 'react'
import entryPointPost from '../assets/Images/loginEntryPointPost.webp'
import {FirebaseContext} from '../Context/Context'
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {auth} from '../FireBase/cofig'
import { NavLink, useNavigate } from 'react-router-dom'
import {
  collection,

  addDoc,
 
} from "firebase/firestore";



function LoginSignUp(props) {

  const {
    isLogin
  } = props
  
  const [userName,setUserName]=useState('')
  const [email,setEmail]=useState('')
  const [mobile,setMobile]=useState('')
  const [password,setPassword]=useState('')

  const navigate=useNavigate()

  const {db}=useContext(FirebaseContext)
  const handleSignUp=async(e)=>{
    e.preventDefault()
   
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
     
      // Signed in
      const user = userCredential.user;

      const usersCollectionRef = collection(db, "users");
      await updateProfile(user, {
        displayName: userName,
      });
      await addDoc(usersCollectionRef, { id:user.uid,name: userName,email:email,mobile:mobile});
      

      navigate("/login")
      // ...

    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    }

    

  }

  const handleLogin =async(e)=>{
    e.preventDefault()
    console.log("login");
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)

      // Signed in
      const user = userCredential.user;
    
   

      navigate("/")
      console.log(user);

    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
      alert("Invalid email or password. Please try again.");

    }


    
  }

  
  return (
    <form onSubmit={isLogin?handleLogin:handleSignUp}>
      <div className='h-[100vh] flex py-16'>
        <div className='w-1/4 h-full m-auto shadow-2xl p-4'>

          <div className='h-1/4  flex justify-center flex-col p-2'>
            <img className='object-contain h-full ' src={entryPointPost} alt="EntryPointPost" />
            <p className='text-center'>Help us become one of the safest places to buy and sell</p>
          </div>
          <div className='mt-10'>
          {isLogin?'':
          <div className=''>
            <div className='rounded border-2 border-[#002F34]'>
              <input value={userName} className='outline-none p-2' type="text" placeholder='User Name' onChange={(e)=>{setUserName(e.target.value)}} />
            </div>
    
          </div>
          }
          <div className='mt-2'>
            <div className='rounded border-2 border-[#002F34]'>
              <input value={email} className='outline-none p-2' type="email" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} />
            </div>
          </div>
          {isLogin?'':
          <div className='mt-2'>
            <div className='rounded border-2 border-[#002F34]'>
              <input value={mobile} className='outline-none p-2' type="number" placeholder='Mobile' onChange={(e)=>{setMobile(e.target.value)}} />
            </div>
          </div>
          
          }
          <div className='mt-2'>
            <div className='rounded border-2 border-[#002F34]'>
              <input value={password}  className='outline-none p-2' type="password" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}} />
            </div>
          </div>

          {isLogin?(
            <>
          <button className='bg-[#002F34] w-full mt-3 p-2 rounded font-bold text-white border-[#002F34] border-4 hover:bg-white hover:text-[#002F34]'>
          Login
          </button>
           <p className='text-center text-sm p-3 text-[#002F34]'>
           <NavLink to={'/signup'}>Sign Up</NavLink>
         </p>
         </>
          ):(
          < >
          <button className='bg-[#002F34] w-full mt-3 p-2 rounded font-bold text-white border-[#002F34] border-4 hover:bg-white hover:text-[#002F34]'>
            Create Account
          </button>

          <hr className='mt-3 ' />

          <p className='text-center text-sm p-3 text-[#002F34]'>
            <NavLink to={'/login'}>have an account already</NavLink>
          </p>
          </>
          )}
        </div>
        </div>
      </div>
    </form>
  )
}

export default LoginSignUp
