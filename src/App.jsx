
import Home from "./Pages/Home"
import LoginSignUp from "./Pages/LoginSignUp"
import ViewPost from './Pages/ViewPost'
import {Routes,Route } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './FireBase/cofig'
import {AuthContext} from "./Context/Context";
import { useContext, useEffect } from "react";
import AddPost from "./Pages/AddPost";
import PostDetails from './Context/PostsContext'



function App() {

  const {setUser}= useContext(AuthContext)

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
   
        setUser(user)
       
      } else {
        setUser(null)
        console.log("user is logged out")
      }
    });
  })

  return (
      <PostDetails>
      <Routes>
        <Route exact  path="/" element={<Home />} ></Route>
        <Route path="/signup" element={<LoginSignUp isLogin={false} />} ></Route>
        <Route path="/login" element={<LoginSignUp isLogin={true} />} ></Route>
        <Route path="/post" element={<AddPost />} ></Route>
        <Route path="/view" element={<ViewPost />} ></Route>
        

      </Routes>
      </PostDetails>
    
  )
}

export default App
