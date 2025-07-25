import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ApiProvider } from './contexts/ApiContext.jsx'

createRoot(document.getElementById('root')).render(
  <ApiProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </ApiProvider>,
)
