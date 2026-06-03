import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LandingPage from './LandingPage.jsx'
import AttendanceBook from './chapter10/AttendanceBook.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AttendanceBook/>
  </StrictMode>,
)
