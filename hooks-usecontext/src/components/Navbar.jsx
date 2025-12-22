import React, { useContext } from 'react'
import { themeContext } from '../App'


const Navbar = () => {
    const {theme,setTheme} = useContext(themeContext);
    
    const handleClick = ()=>{
    setTheme(theme==='light' ? "Dark" : "light")
    }

  return (
    <div className='navbar' style={{background:theme==='light' ?'aquamarine' : 'red'}}>
        <button onClick={handleClick}>Change</button>
    </div>
  )
}

export default Navbar