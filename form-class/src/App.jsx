import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [input, setInput] = useState({
    name: "",
    age: "",
    email: "",
    gender: "male",
    termC: true
  });

  const [errors, setErrors] = useState({});   // store form errors
  const [formData, setFormData] = useState([]);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    setInput({
      ...input,
      [name]: type === "checkbox" ? checked : value
    });
  };

  // VALIDATION FUNCTION
  const validateForm = () => {
    const newErrors = {};

    if (!input.name.trim()) newErrors.name = "Name is required";

    if (!input.age) newErrors.age = "Age is required";
    else if (Number(input.age) < 1) newErrors.age = "Age must be greater than 0";

    if (!input.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email))
      newErrors.email = "Invalid email format";

    if (!input.gender) newErrors.gender = "Gender is required";

    if (input.termC === false)
      newErrors.termC = "You must accept terms & conditions";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // returns true if no errors
  };

  const formHandler = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      console.log("Form has errors");
      return;
    }

    setFormData([...formData, input]);

    setInput({
      name: "",
      age: "",
      email: "",
      gender: "male",
      termC: false
    });

    setErrors({});
  };

  return (
    <div>
      <form onSubmit={formHandler}>
        
        {/* NAME */}
        <label htmlFor="name">Name: </label>
        <input 
          type="text" 
          name="name"
          placeholder="Enter Your Name"
          value={input.name}
          onChange={handleChange}
        />
        {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
        <br/><br/>

        {/* AGE */}
        <label htmlFor="age">Age: </label>
        <input 
          type="number" 
          name="age"
          placeholder="Enter Your Age"
          value={input.age}
          onChange={handleChange}
        />
        {errors.age && <p style={{color:"red"}}>{errors.age}</p>}
        <br/><br/>

        {/* EMAIL */}
        <label htmlFor="email">Email: </label>
        <input 
          type="email" 
          name="email"
          placeholder="Enter Your Email"
          value={input.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
        <br/><br/>

        {/* GENDER */}
        <label>Gender: </label>
        <input 
          type="radio" 
          name="gender" 
          value="male" 
          checked={input.gender === "male"} 
          onChange={handleChange}
        /> Male

        <input 
          type="radio" 
          name="gender" 
          value="female" 
          checked={input.gender === "female"} 
          onChange={handleChange}
        /> Female

        {errors.gender && <p style={{color:"red"}}>{errors.gender}</p>}
        <br/><br/>

        {/* TERMS */}
        <input 
          type='checkbox' 
          name='termC' 
          checked={input.termC} 
          onChange={handleChange}
        /> 
        <label htmlFor="termC">I agree to terms & conditions.</label>
        {errors.termC && <p style={{color:"red"}}>{errors.termC}</p>}
        <br/><br/>
        
        <button>Submit</button>
      </form>

      <h2>Submitted Data:</h2>
      <ul>
        {formData.map((item, index) => (
          <li key={index}>
            {item.name} — {item.age} — {item.email} — {item.gender} — {item.termC ? "Checked" : "Unchecked"}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
