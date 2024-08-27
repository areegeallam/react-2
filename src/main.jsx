import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css'
import TokenContextProvider from './Context/TokenContext.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CartContextProvider from './Context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <CartContextProvider>
    <TokenContextProvider>
    <StrictMode>
   <App />
  </StrictMode>
  </TokenContextProvider>,

  </CartContextProvider>
  
  
  
  
  
)
