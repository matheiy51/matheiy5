import React from 'react'
import { useDispatch } from 'react-redux'
import { changeauthor } from "./authordata";
const Authorlogin = () => {

    const dispatch=useDispatch()

    const changedata = () => {
        dispatch(changeauthor({aname:'hhh',bname:'ff',price:'400'}))
    }
  return (
    <div>
        <button onClick={changedata}>Changedata</button>
    </div>
  )
}

export default Authorlogin