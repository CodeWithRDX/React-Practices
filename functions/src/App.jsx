
const App = () => {
  const greet = ()=>{
    console.log("Guten Abend");
  }

  return (
    <div>
      <button onMouseEnter={greet}  onClick={greet}>Click</button>
      <button onDoubleClick={greet}>DBLClick</button><br></br>
      <input type="text" placeholder="Enter Your Name" onChange={(elem)=>{
        console.log(`${elem.target.value} is typing`);
      }}/>
    </div>
  )
}

export default App