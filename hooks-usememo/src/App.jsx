import { useMemo, useState } from 'react'

import './App.css'
import Form from './components/Form'
import Timer from './components/Timer'

function App() {
  // const [count, setCount] = useState(0)
  // const [input, setInput] = useState(0)
  // function handleClick(){
  //   setCount(prev=>prev+1);
  // }
  // function expensiveFunction(num){
  //   console.log("Inside Expensive function");
  //   for(let i=0;i<100000000;i++){}
  //   return num*2;
  // }
  // let doubleValue = useMemo(()=>expensiveFunction(input), [input]);
  

  return (
    <>
      {/* <button onClick={handleClick}>Increase</button><br></br>
      <div>{count}</div>
      <div><input type="number" placeholder='Enter Number' value={input} onChange={(e)=>{setInput(e.target.value)}}/></div>
      <div>double: {doubleValue}</div> */}
      {/* <Form/> */}
      <Timer/>
    </>
  )
}

export default App
