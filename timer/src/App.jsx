import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'


const App = () => {
  const [time, setTime] = useState(0);
  const timer = useRef(null);
  

  function startTimer(){
    if(timer.current) return
    timer.current = setInterval(()=>{
      setTime(prev=>prev+1);
    },1000)
  }
  function stopTimer(){
    clearInterval(timer.current);
    timer.current = null;
  }
  function resetTimer(){
    clearInterval(timer.current);
    timer.current = null;
    setTime(0);
  }

  return (
    <div className='outer'>
      <div className="time">{time}</div>
      <div className="btn">
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  )
}

export default App