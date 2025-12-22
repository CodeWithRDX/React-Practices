import React, { useState } from 'react'
import Child1 from './components/Child1'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>Count : {count}</div>
      <br></br>
      <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
      <Child1 buttonname="click"/>
    </div>
  )
}

export default App