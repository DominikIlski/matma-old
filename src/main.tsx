import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { inject } from '@vercel/analytics'
import './index.css'
import Design3 from './designs/Design3'

inject()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Design3 />
  </StrictMode>,
)
