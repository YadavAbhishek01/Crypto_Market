import React, { useContext } from 'react'
import './Header.css'
import { coincontextapi } from '../../Context/CoinContext'
import { Link } from 'react-router-dom'


const Header = () => {
const{currency,setcurrency}=useContext(coincontextapi)


const CurrencyHandler=(e)=>{
    if(e.target.value==="usd")
    {
        setcurrency({name:'usd',symbol:'$'})
    }
    else if(e.target.value==="eur")                     
    {
        setcurrency({name:'eur',symbol:'€'})        
    }
    else if(e.target.value==="inr")                             
    {
        setcurrency({name:'inr',symbol:'₹'})        
    }
}
    console.log(currency)
  return (
    <div className='header'>
        <div className="logo">
            {/* <img src= alt="Logo" /> */}
        </div>
        <div className="links">
            <ul>
              <Link to={'/'}><li>Home</li></Link>
                <li>Features</li>
                <li>price</li>
                <li>blog</li>
            </ul>
            </div>      
            <div className="right">
                <select onChange={CurrencyHandler} value={currency.name}>
                    <option value="usd" >USD</option>                    
                    <option value="eur">EUR</option>           
                    <option value="inr">INR</option>       
                </select>
                <button>SingUp</button>
                </div>           
    </div>
  )
}

export default Header
