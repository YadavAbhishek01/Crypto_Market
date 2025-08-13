import React, { createContext, useEffect, useState } from 'react'

export const coincontextapi=createContext();
  
     const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-N96bzvrcgMhy2r93Zpvk6zAr'}
  };
  
/** this is api  */
/**   const options = {
  method: 'GET',
  headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-N96bzvrcgMhy2r93Zpvk6zAr'}
};

fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err)); */


  
const CoinContext = ({children}) => {

     const[allcoin,setAllcoin]=useState([]);
     const[currency,setcurrency]=useState({
        name:"USD",
        symbol:"$"

     })
    

     useEffect(()=>{

        const fetchallcoin=async()=>{
            const res=await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', options)
            const data=await res.json();  
            setAllcoin(data)      
            console.log(data)

         }
         fetchallcoin();                
     },[])
  return (
  
    <coincontextapi.Provider value={{allcoin,currency,setcurrency}}>                                   
        {children}                              
    </coincontextapi.Provider>
  )
}

export default CoinContext

