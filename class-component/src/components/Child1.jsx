import React, { Component } from 'react'

class Child1 extends Component{

    constructor(props){
        super(props);
        this.state = { count : props.count }  ;
    }

    componentDidUpdate(prevProps) {
        if (prevProps.count !== this.props.count) {
          this.setState({ count: this.props.count });
        }
    }

    render(){
        return <>
            <h1>Hello {this.props.name}</h1>
            <div>Count:{this.state.count}</div>
            <button onClick={()=>{
                this.props.setCount(prev => prev+1)
            }}>Increment</button>
        </>
    }

}

export default Child1