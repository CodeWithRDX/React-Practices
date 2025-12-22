import React from 'react'

const Child1 = (props) => {
    console.log("Child Component got Re-rendered")
  return (
    <div>
        <button>{props.buttonname}</button>
    </div>
  )
}

export default Child1