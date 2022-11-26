import React from 'react'
import { useSelector } from 'react-redux'

const Userprofile = () => {

    const userdata=useSelector(state=> state.user.value)
  return (
    <div>
        <h2>Name: {userdata.name} </h2>
        <h2>Email :{userdata.email}</h2>
        <h2>Department :{userdata.department}</h2>
    </div>
  )
}

export default Userprofile