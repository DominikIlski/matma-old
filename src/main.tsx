import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Design3 from './designs/Design3'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Design3 />
  </StrictMode>,
)
