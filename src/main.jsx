import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CoinContext from './Context/CoinContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <StrictMode>
    <CoinContext>
    <App />
    </CoinContext>
  </StrictMode>
  </BrowserRouter>
 
)
