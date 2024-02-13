import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Blue from './components/Blue'
import Red from './components/Red'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      
      
      <div id="main">
        <Routes>
          <Route path="/"  />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
        </Routes>

      </div>

    </div>
      
    </>
  )
}

export default App
