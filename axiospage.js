import React, {useState} from 'react'
import axios from "axios";
import { TextField } from '@mui/material';
const Axiospage = () => {
    const [records,setRecords] =useState([])
    const [pass,setPass] = useState("")

    const getdata = () =>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
           
            setRecords(response.data)
        })
    }

    const login = () =>{
        const pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

        if(!pass.match(pattern)){
            alert("atleast one digit, atleast lower case,atleast one uppercase, minimum 8 characters")
        }
        else{
            alert("success");
        }
    }

  return (
    <div>
        <button onClick={getdata}>GetData</button>


        <TextField label="name" type="text" value={pass} onChange={e=>setPass(e.target.value)}/>

        <button onClick={login}>Login</button>
        {
            records.map((key)=>{
                return (
                    <>
                    <div style={{border:'1px solid black',margin:'30px'}}>
                        <h5>userid:{key.userId}</h5>
                        <p>title: {key.title}</p>
                    </div>
                    
                    </>
                    
                )
            })
        }
    </div>
  )
}

export default Axiospage