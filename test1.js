import React from 'react'

const Test1 = () => {

    const records={"name":"mathi","email":"mathi@gmail.com"}//object
    const studentdata=["mathi","mathi@gmail.com","coimbatore"]//array

    const studentrecords=[
        {"name":"mathi","email":"mathi@gmail.com"},
        {"name":"deva","email":"deva@gmail.com"},
        {"name":"ragu","email":"ragu@gmail.com"},
        {"name":"dinesh","email":"dinesh@gmail.com"},
        {"name":"arun","email":"arun@gmail.com"}
    ]

    const jsondata=`[
        {"name":"mathi","email":"mathi@gmail.com"},
        {"name":"deva","email":"deva@gmail.com"},
        {"name":"ragu","email":"ragu@gmail.com"},
        {"name":"dinesh","email":"dinesh@gmail.com"},
        {"name":"arun","email":"arun@gmail.com"}
    ]`

    const convertjson=JSON.parse(jsondata);
    

  return (
    <div>
       
        //array
        {
            studentdata.map((key)=>{
                return <h4>{key}</h4>
            })
        }

        //array object
        {
            studentrecords.map((key)=>{
                return <h4>{key.name}</h4>
            })
        }

        //json object
        {
                convertjson.map((key)=>{
                        return <h4>{key.name}</h4>
                    })
        }

    </div>
  )
}

export default Test1