import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastBar, Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { store } from '../app/store.js'



createRoot(document.getElementById('root')).render(
  <StrictMode>
<Toaster></Toaster>
<Provider store={store}>
  <App />
</Provider>
   
  
  </StrictMode>,
)
