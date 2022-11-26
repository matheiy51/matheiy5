import React from 'react'
import { useSelector } from 'react-redux'

const Authorprofile = () => {
    const authors=useSelector(state => state.author.value)
  return (
    <div>
        <h2>Author Name : {authors.aname}</h2>
        <h2>Book Name :{authors.bname}</h2>
        <h2>Price : {authors.price}</h2>
    </div>
  )
}

export default Authorprofile