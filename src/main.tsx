import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Bar from './bar.tsx'

createRoot(document.getElementById("main")!).render(
  <StrictMode>
    <div className="flex text-white">
      <div className=" bg-neutral-800 p-2 h-screen">
        <Bar />
      </div>
      <div className="h-screen w-full p-2 bg-black">
        <App />
      </div>
    </div>
  </StrictMode>,
)
