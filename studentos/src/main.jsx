import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {HashRouter} from 'react-router-dom'
import './styles/index.css'
import App from './App.jsx'
import { AuthProvider } from './authProvider.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
  </AuthProvider>
  
)
