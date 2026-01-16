import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import KlicusLanding from './app'
import "../styles/global.css"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <KlicusLanding></KlicusLanding>
  </StrictMode>,
)
