import React, { useContext } from 'react'
import { userContext } from '../App'

const Greet = () => {
    const value= useContext(userContext);
  return (
    <span>Helo From {value.name} <br></br> I am {value.age} years old</span>
  )
}

export default Greet