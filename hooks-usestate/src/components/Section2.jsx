import React from 'react'
import { useState } from 'react'

const Section2 = () => {
    const [user, setUser] = useState({name:"Raushan",age:20})
    const changeUser = ()=>{
        setUser({
            ...user,
            name: user.name==="Raushan" ? "Ankit" : "Raushan",
            age: user.age===20 ? 25 : 20,
        });
        console.log("Changing user");
        
    }
  return (
    <div className='bg-gray-800 h-screen w-screen flex flex-col justify-center items-center'>
        <h2 className=' p-1.5 border-2 border-amber-300 bg-white text-black text-3xl rounded-2xl'>Username: {user.name} | age: {user.age}</h2>
        <button onClick={changeUser} className='p-2 border-2 border-teal-500 rounded-4xl bg-blue-500'>Change User</button>
    </div>
  )
}

export default Section2