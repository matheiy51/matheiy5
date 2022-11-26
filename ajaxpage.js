import React, { useState} from 'react'

const Ajaxpage = () => {

    const [records,setRecords] =useState([]);


    const getdata = () => {
       fetch("https://jsonplaceholder.typicode.com/posts")
       .then(res=>res.json())
       .then(
        (data)=>{
            console.log(data)
            setRecords(data)
            alert(data.length)
        },
        (error)=>{
            alert("error");
        })

    }


  return (
    <div>
        
        <button onClick={getdata}>GetData</button>
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

export default Ajaxpage