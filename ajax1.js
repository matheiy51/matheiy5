import React,{useState} from 'react'

const Ajax1 = () => {

    const [records,setRecords] =useState([])
    const getdata= () =>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(
            (data)=>{
                console.log(data)
                setRecords(data)
            },
            (error)=>{
                alert("error")
            }
        )
    }

  return (
    <div>
        <button onClick={getdata}>Getrecords</button>
        {
            records.map((key)=>{
                return (
                    <div>
                        <h3>userid : {key.userId}</h3>
                        <h2>id : {key.id}</h2>
                        <h5>title :{key.title}</h5>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Ajax1