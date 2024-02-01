import React from 'react'
import Header from '../Components/Header'
import AddPostForm from '../Components/AddPostForm/AddPostForm'

function AddPost() {
  return (
    <>
        <Header isEmpty={true} />
        <AddPostForm />
    </>

  )
}

export default AddPost
