import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LandingPage from './LandingPage.jsx'
import AttendanceBook from './chapter10/AttendanceBook.jsx'
import SignUp from './chapter11/SignUp.jsx'
import Calculator from './chapter12/Calculator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Calculator/>
  </StrictMode>,
)
