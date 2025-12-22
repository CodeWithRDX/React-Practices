import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child1 from './components/Child1'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0);
  

  return (
    <>
      <Child1 name="Raushan" count={count} setCount={setCount}/>
      <Form/>
    </>
  )
}

export default App
