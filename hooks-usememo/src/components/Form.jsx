import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react'

const Form = () => {
    const [formData, setFormData] = useState({
        name:"",
        age:"",
        email:""
    });

    const handler = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    const submitHandler = (e)=>{
        e.preventDefault();
        console.log("Form Submitted Sucessfully...");
        console.log(formData);
    }

    const para = useMemo(()=>{
        return `Name: ${formData.name} | Age: ${formData.age} | email: ${formData.email}`;
    },[formData])


  return (
    <div>
        <form action="#" onSubmit={submitHandler}>
            <input type="text" name='name' placeholder='Enter Your Name' value={formData.name} onChange={handler}/>
            <input type="number" name='age' placeholder='Enter Your Age' value={formData.age} onChange={handler}/>
            <input type="email" name='email' placeholder='Enter Your Email' value={formData.email} onChange={handler}/>
            <button>Submit</button>
        </form>
        <h1>Form Data</h1>
        <h4>{para}</h4>
    </div>
  )
}

export default Form