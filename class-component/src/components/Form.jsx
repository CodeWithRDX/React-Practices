import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: ""
    };
    
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted...");
    console.log(this.state);
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Enter Your Name"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />

          <input 
            type="number" 
            name="age" 
            placeholder="Enter Your Age"
            value={this.state.age}
            onChange={(e) => this.setState({ age: e.target.value })}
          />

          <input 
            type="email" 
            name="email" 
            placeholder="Enter Your Email"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />

          <button>Submit</button>
        </form>
      </>
    );
  }
}

export default Form;
