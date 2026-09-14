import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {HashRouter} from 'react-router-dom'
import './styles/index.css'
import App from './App.jsx'
import { AuthProvider } from './authProvider.jsx'
import { NotificationProvider } from './NotificationProvider.jsx'

createRoot(document.getElementById('root')).render(
  <NotificationProvider>
    <AuthProvider>
    <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
  </AuthProvider>
  </NotificationProvider>
  
)
