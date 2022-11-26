import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from './userdata'

const Test3 = () => {
    const dispatch=useDispatch()

    const changedata =() =>{
        dispatch(login({name:'mathi',email:'mathi@gmail.com',department:'cse'}))
    }
  return (
    <div>
        <button onClick={changedata}>Login</button>
    </div>
  )
}

export default Test3