import React, { createContext, useState } from 'react'
import Greet from './components/Greet';
import User from './components/User';
import Navbar from './components/Navbar';

export const userContext = createContext();
export const themeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState('light');
  return (
    <div>
      <themeContext.Provider value={{theme,setTheme}}>
        <Navbar/>
      </themeContext.Provider>
      <userContext.Provider value={{"name":"Raushan","age":18}}>
        <User/>
      </userContext.Provider>
    </div>
  )
}

export default App