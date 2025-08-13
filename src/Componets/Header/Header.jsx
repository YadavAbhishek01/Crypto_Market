import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
        <div className="logo">
            {/* <img src= alt="Logo" /> */}
        </div>
        <div className="links">
            <ul>
                <li>Home</li>
                <li>Features</li>
                <li>price</li>
                <li>blog</li>
            </ul>
            </div>      
            <div className="right">
                <select name="" id="">
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>           
                    <option value="INR">INR</option>       
                </select>
                <button>SingUp</button>
                </div>           
    </div>
  )
}

export default Header
