import React from 'react'
import Navbar from './components/Section1/Navbar'
import Section1 from './components/Section1/Section1'

const App = () => {
  const users = [
    {
      img:'https://images.unsplash.com/flagged/photo-1575227057258-50cb9bffb1af?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      button1:'Satisfied',
      btcolor:'royalblue',
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      button1:'Underserved',
      btcolor:'orange',
    },
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      button1:'Underbanked',
      btcolor:'gray',
    },
  ];
  
  return (
    <div>
      <Navbar/>
      <Section1 users={users}/>
    </div>
  )
}

export default App