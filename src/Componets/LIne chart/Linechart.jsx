import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'
import { MoonLoader } from 'react-spinners';
const Linechart = ({historicaldata}) => {
const [date,setDate]=useState([["Date", "Price"]]);

useEffect(()=>{
    let datacopy = [["Date", "Price"]];
    if (historicaldata.prices) { 
        historicaldata.prices.map((item,i)=>{
            const date = new Date(item[0]);
            const price = item[1];
            datacopy.push([date.toLocaleDateString().slice(0, -5), price]); 
        })
        setDate(datacopy);
    }               
},[historicaldata]);
  return (  
    <Chart 
        chartType='LineChart'
        width='100%'
        height='400px'
        data={date}
        // options={{
        //     title: 'Price History',
        //     hAxis: { title: 'Date' },
        //     vAxis: { title: 'Price' },
        //     legend: 'none',
        //     backgroundColor: 'transparent',
        //     colors: ['#4caf50'],
        //     chartArea: { width: '80%', height: '70%' },
        //     pointSize: 5,
        //     lineWidth: 2,
        //     tooltip: { isHtml: true },
        //     animation: {
        //         startup: true,
        //         duration: 1000,
        //         easing: 'out',
        //     },
        // }}
        legendToggle={true}
        loader={<div><MoonLoader
          color="#ffffff"
          loading={true}
          cssOverride={{
            margin: "0 auto",
            borderColor: "red",
            position: 'absolute',
            top: '50%',
            left: '45%',
            height: "50px",
            width: "100px",
          }}
          size={50}   
        
        /></div>}    
    />
  )
}

export default Linechart
