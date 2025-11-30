import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component1 from './components/Component1.jsx'
import Component2 from './components/Component2.jsx'
import Component3 from './components/Component3.jsx'
import Component4 from './components/Component4.jsx'

function App() {


  return (
   // 1. Outer container defines the overall size and centers the grid
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      
      {/* 2. Grid container: This is what creates the 2x2 layout */}
      <div className="grid grid-cols-2 grid-rows-2 gap-0 w-full max-w-lg aspect-square gap-4 border-4 border-red-">
        <Component1 />
        <Component2 />
        <Component3 />
        <Component4 />
      </div>
      
    </div>
  )
}

export default App
