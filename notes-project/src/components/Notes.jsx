import React from 'react'

const Notes = (props) => {
    
  return (
    <div className=" h-52 w-40 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] bg-cover bg-center rounded p-5 text-sm flex flex-col justify-between">
        <div>
        <h3 className='text-xl bold italic '>{props.heading}</h3>
        <p>{props.para}</p>
        </div>
        <button className='bg-red-400 rounded py-1 w-full text-xl font-bold  active:bg-white' onClick={props.deleteCard}>Delete</button>
    </div>
  )
}

export default Notes