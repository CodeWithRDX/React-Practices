import React,{useState} from 'react'

const Section1 = () => {
    const [a, setA] = useState(10)
  function increseA(){
    setA(a+1);
    console.log("Incresing");
  }
  function decreseA(){
    setA(a-1);
    console.log("Decresing");
  }
  function jumpby5(){
    setA(a+5);
    console.log("Jumping by 5");
  }
  return (
    <div className='bg-amber-900 h-screen w-screen flex flex-col justify-center items-center'>
        <h2 className='text-4xl text-blue-500'>Counter</h2>
        <h3>{a}</h3>
        <div className='btn'>
          <button onClick={increseA}>Increse</button>
          <button onClick={decreseA}>Decrese</button>
          <button onClick={jumpby5}>Jump</button>
          <button onClick={()=>{setA(10)}}>Reset</button>
        </div>
    </div>
  )
}

export default Section1