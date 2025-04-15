import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Inventory from './Inventory.jsx'
import OrderPage from './OrderPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Inventory/> */}

    <OrderPage/>
    
  </StrictMode>,
)
