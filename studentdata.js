import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React from 'react'

const Studentdata = () => {

    const sdata=`[
        {"name":"mathe","email":"mathe@gmail.com","department":"CSE","place":"Coimbatore"},
        {"name":"deva","email":"deva@gmail.com","department":"CSE","place":"erode"},
        {"name":"ragu","email":"ragu@gmail.com","department":"CSE","place":"salem"},
        {"name":"dinesh","email":"dinesh@gmail.com","department":"CSE","place":"madurai"},
        {"name":"prabhu","email":"prabhu@gmail.com","department":"CSE","place":"chennai"},
        {"name":"ravi","email":"ravi@gmail.com","department":"CSE","place":"theni"}
    ]`
    const d=JSON.parse(sdata);
    console.log(d)
   
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>Place</th>
                </tr>
            </thead>
            <tbody>
                {
                    d.map((key) => {
                        return (
                            <tr>
                            <td>{key.name}</td>
                            <td>{key.email}</td>
                            <td>{key.department}</td>
                            <td>{key.place}</td>
                            </tr>
                        )
                    })
                }
    </tbody>
    </table>
       
    </div>
  )
}

export default Studentdata