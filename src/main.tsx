import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById("main")!).render(
  <StrictMode>
    <div>
      Hell world
    </div>
  </StrictMode>,
)
