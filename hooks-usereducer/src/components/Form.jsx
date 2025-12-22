import React, { useReducer } from 'react'

const initialState = {
    name:"",
    age:"",
    email:""
}

function reducer(state,action){
    return{
        ...state,
        [action.field] : action.value
    };
}


const Form = () => {
    const [state, dispatch] = useReducer(reducer,initialState);
  return (
    <div>
        <form action="#" 
            onSubmit={(e)=>{e.preventDefault();
             console.log("Form Submitted Sucessfully...");
             }}>
            <input type="text" name='name' placeholder='Enter Your Name' onChange={(e)=>(dispatch({field:"name",value:e.target.value}))}/>
            <input type="number" name='age' placeholder='Enter Your Age' onChange={(e)=>(dispatch({field:"age",value:e.target.value}))}/>
            <input type="email" name='email' placeholder='Enter Your Email' onChange={(e)=>(dispatch({field:"email",value:e.target.value}))}/>
            <button>Submit</button>
        </form>
        {/* <pre>{JSON.stringify(state,null,2)}</pre> */}
        <h3>Name:{state.name}</h3>
        <h3>Age:{state.age}</h3>
        <h3>Email:{state.email}</h3>
    </div>
  )
}

export default Form