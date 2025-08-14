import React, { useContext, useState } from 'react'
import './home.css'
import { coincontextapi } from '../../Context/CoinContext';
import { options } from 'joi';
import { Link } from 'react-router-dom';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { allcoin, setAllcoin, currency } = useContext(coincontextapi);


  const [filterdata, setFilterData] = useState([])

  const submithandler = (e) => {
    e.preventDefault();

    const filterCoin = allcoin.filter((item) => {
      return item.name.toLowerCase().includes(searchTerm.trim().toLowerCase())

    })
    setFilterData(filterCoin)

  };
  const inputhandler = (e) => {
    setSearchTerm(e.target.value);

    // Optional: Reset filtered data live
    if (e.target.value.trim() === '') {
      setFilterData([]); // reset to show all
    }
  };




  // console.log(allcoin)
  return (
    <div className='home'>
      <div className="hero">
        <h1 className="title">Welcome to our website</h1>
        <br />
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
        </p>
        <form onSubmit={submithandler}>
          <input  list='coinlist'
            type="text"
            placeholder='Search Crypto'
            value={searchTerm}
            onChange={inputhandler} />
          <button type="submit">Search</button>

          <datalist id='coinlist'>
            {allcoin.map((item)=>(<option key={item.id} value={item.name} />))}             
            </datalist>             
        </form>
      </div>

      <div className="cypto-main">
        <div className="table-layout table-header">
          <h5 className="col-rank">#</h5>
          <h5 className="col-name">Coin Name</h5>
          <h5 className="col-price">Price</h5>
          <h5 className="col-change">24h Change</h5>
          <h5 className="col-cap">Market Cap</h5>
        </div>
        <div className="allcoins">
          {(filterdata.length > 0 ? filterdata : allcoin).slice(0, 10).map((elem) => (
            <Link to={`/coin/${elem.id}`} className="table-layout" key={elem.id}>
              <h5 className="col-rank">{elem.market_cap_rank}</h5>
              <h5 className="col-name">
                <img src={elem.image} alt={elem.symbol} /> {elem.name + "-" + elem.symbol}
              </h5>
              <h5 className="col-price">{currency.symbol}{elem.current_price.toLocaleString()}</h5>
              <h5 className={elem.price_change_percentage_24h > 0 ? "green" : "red"}>{elem.price_change_percentage_24h?.toFixed(2)}%</h5>
              <h5 className="col-cap">{currency.symbol}{elem.market_cap.toLocaleString()}</h5>
            </Link>
          ))}
        </div>

      </div>




    </div>
  )
}

export default Home;
