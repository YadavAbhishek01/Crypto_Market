import React, { useEffect, useState, CSSProperties, useContext } from 'react'
import './coin.css'
import { useParams } from 'react-router-dom'
import { ClipLoader, MoonLoader, PulseLoader, SyncLoader } from 'react-spinners'
import Chart from 'react-google-charts'
import { coincontextapi } from '../../Context/CoinContext'

const Coin = () => {


  const apiURl = 'https://api.coingecko.com/api/v3/coins/bitcoin'

  const [coinIddata, setCoinIdData] = useState([]);
  let [color, setColor] = useState("#ffffff");
  let [loading, setLoading] = useState(true);
  const { coinId } = useParams()

  const{currency}=useContext(coincontextapi)

  const override = {
    margin: "0 auto",
    borderColor: "red",
    position: 'absolute',
    top: '50%',
    left: '45%',
    height: "50px",
    width: "100px",

  };
  const options = {
    method: 'GET',
    headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-N96bzvrcgMhy2r93Zpvk6zAr' }
  };
  useEffect(() => {

    const getcoinDataByid = async () => {
      setLoading(true)
      const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options);
      const data = await res.json();
      console.log(data);

      setCoinIdData(data);
      setLoading(false)
    }

    getcoinDataByid();
  }, [coinId])
  console.log(coinIddata)


  if (loading || !coinIddata) {
    return (
      <MoonLoader className='loader'
        color={color}
        loading={loading}
        cssOverride={override}
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    )
  }
  const data = [
    ["Year", "Sales", "Expenses"],
    ["2013", 10, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
  ];
  const chartoptions = {
    chart: {
      title: "Company Performance",
      subtitle: "Sales and Expenses over the Years",
    },
  };


 
  const currencyName=currency.name;
  console.log(currencyName)
  return (
    <div className='coin-main'>
      <div className="image">
      {typeof coinIddata.image?.large === 'string' && (
        <img src={coinIddata.image.large} alt={coinIddata.name} />
      )}
      <h5>({coinIddata.symbol})</h5>
      </div>

      <div className="chart">
      <Chart
      chartType="Line"
      width="100%"
      height="400px"
      data={data}
      options={chartoptions}
    />
      </div>
      <div className="coin-details">
        <div className="coin-title">
        <p>Crypto Market Rank</p>
        <p>Current Price</p>
        <p>Market cap</p>
        <p>24 Hour high</p>
        <p>24 Hour low</p>
        </div>
       <div className="coin-data">
       <p>{coinIddata.market_cap_rank}</p>
        <p>{currency.symbol}{coinIddata.market_data?.current_price?.[currencyName]}</p>
        <p>{currency.symbol}{coinIddata.market_cap_rank}</p>
        <p>{currency.symbol}{coinIddata.market_data?.high_24h?.[coinIddata.symbol]}</p>
        <p>{currency.symbol}{coinIddata.market_data?.low_24h?.[coinIddata.symbol]}</p>
       </div>
        
      </div>
    </div>
  )
}

export default Coin
