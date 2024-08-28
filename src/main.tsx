import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Bar from './bar.tsx'

createRoot(document.getElementById("main")!).render(
  <StrictMode>
    <div className="flex text-white h-screen">
      <div className="bg-bar-color p-2 h-100%">
        <Bar />
      </div>
      <div className="h-100% w-full p-2 bg-black">
        <App />
      </div>
    </div>
  </StrictMode>,
)
