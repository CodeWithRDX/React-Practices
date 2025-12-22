// import React, { useState } from 'react'

// const App = () => {

//   // Store single form input values
//   const [input, setInput] = useState({
//     name: "",
//     age: "",
//     email: ""
//   });

//   // Store multiple submitted entries
//   const [formData, setFormData] = useState([]);

//   // Handle input changes
//   const handleChange = (e) => {
//     setInput({
//       ...input,
//       [e.target.name]: e.target.value
//     });
//   };

//   // Handle form submission
//   const formHandler = (e) => {
//     e.preventDefault();

//     // Add new entry into array
//     setFormData([...formData, input]);

//     console.log("Form Submitted...");
//     console.log("name",input.name);
//     console.log("age",input.age);
//     console.log("email",input.email);

//     // Clear form after submit
//     setInput({
//       name: "",
//       age: "",
//       email: ""
//     });
//   };

//   return (
//     <div>
//       <form onSubmit={formHandler}>
//         <input 
//           type="text" 
//           name="name"
//           placeholder="Enter Your Name"
//           value={input.name}
//           onChange={handleChange}
//         />

//         <input 
//           type="number" 
//           name="age"
//           placeholder="Enter Your Age"
//           value={input.age}
//           onChange={handleChange}
//         />

//         <input 
//           type="email" 
//           name="email"
//           placeholder="Enter Your Email"
//           value={input.email}
//           onChange={handleChange}
//         />

//         <button>Submit</button>
//       </form>

//       <h2>Submitted Data:</h2>
//       <ul>
//         {formData.map((item, index) => (
//           <li key={index}>
//             {item.name} — {item.age} — {item.email}
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default App


import React, { useRef, useState } from 'react'


const App = () => {

  const [data, setData] = useState({
    name:"",
    age:null,
    email:""
  });
  

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  
  function formHandler(e){
    e.preventDefault();
    const newData = {
      name: ref1.current.value,
      age: ref2.current.value,
      email: ref3.current.value
    }
    setData(newData);
    console.log("Form Submitted");
  }

  return (
    <div>
      <form action="#" onSubmit={formHandler}>
        <input ref={ref1} type="text" name="name" placeholder='Enter Your Name' />
        <input ref={ref2} type="number" name="age" placeholder='Enter Your Age' />
        <input ref={ref3} type="email" name="email" placeholder='Enter Your Email' />
        <button >Submit</button>
      </form>

      <div>
        <h2>Form Data</h2>
        <h3>{data.name}</h3>
        <h3>{data.age}</h3>
        <h3>{data.email}</h3>
      </div>
    </div>
  )
}

export default App