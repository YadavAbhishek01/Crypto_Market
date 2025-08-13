import React from 'react'
import './home.css'
const Home = () => {
    const submithandler=(e)=>{
        e.preventDefault();
    }
  return (
    <div className='home'>
      <div className="hero">
        <h1 className="title">Welcome to our website</h1>    
        <br />
        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit ametnulla auctor, vestibulum magna sed, convallis ex.</p> 
        <form action="">
            <input type="text"  placeholder=' search Crypto'/>
            <button>Search</button>
            </form>                      
      </div>
      <div className="cypto-table">
        <div className="table-layout">
            <h5>#</h5>
            <h5>coin-name</h5>             
             <h5>Price</h5>                 
              <h5>24h %</h5>
              <h5>marketcap</h5>        
            

            {/* <p style={{textAlign:"start"}}>#</p>
            <p>coins-name</p>
            <p>price</p>    
            <p>24h </p>
            <p>market cap</p>    */}
        </div>
      </div>
    </div>
  )
}

export default Home
