import React, { useState } from 'react'
import Notes from './components/Notes';
import Form from './components/Form';

const App = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [task, setTask] = useState([])

  const formHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted...");
    const data = {
      title:title,
      text:text
    }

    if (!title.trim() || !text.trim()) {
      alert("Both title and text are required!");
      return;
    }
    setTask([...task,data]);
    
    setTitle('');
    setText('');
  }

  function deleteCard(idx){
    const copy = [...task];
    copy.splice(idx,1);
    setTask(copy);
  }

  return (
    <div className='lg:flex h-screen bg-black  justify-between'>
      <form onSubmit={e => formHandler(e)} className=' flex p-5 gap-3 flex-col lg:w-1/3 '>
          <h1 className='text-white text-4xl'>Add Notes</h1>
          <input type="text" placeholder='Enter Notes Heading' className=' border-2 outline-none px-5 py-2 rounded bg-white text-xl' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
          <textarea name="subText" placeholder='Text here....' className='border-2 h-32 px-5 outline-none py-2 rounded bg-white' value={text} onChange={(e)=>{setText(e.target.value)}}></textarea>
          <button className='border-amber-2 outline-none px-5 py-2 rounded bg-white active: bg-gray-400' >Add Note</button>
      </form>
      <div className="h-full w-2/3 p-5 lg:border-l-2 border-white">
          <h1 className='text-4xl pb-3 text-white '>Recent Notes</h1>
          <div className='flex flex-wrap gap-10'>
            {
              task.map((elm,idx)=>(
                <Notes key={idx} heading={elm.title} para={elm.text} deleteCard = {()=>deleteCard(idx)}/> 
              ))
            }
          </div>
      </div>
    </div>
  )
}

export default App