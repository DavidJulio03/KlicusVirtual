import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import KlicusLanding from '../pages/index/index.jsx'
import "../styles/global.css"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <KlicusLanding></KlicusLanding>
  </StrictMode>,
)
