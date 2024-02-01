import { createContext, useState } from "react";

export const PostsContext=createContext(null)

export default function Post({children}){
    const [postDetails,setPostDetails]=useState({})
  
    return (
        <PostsContext.Provider value={{postDetails,setPostDetails}}>
            {children}
        </PostsContext.Provider>
    )
}