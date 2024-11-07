import { useState, useReducer } from 'react'
import {Routes, Route} from 'react-router-dom'
import { useImmerReducer } from "use-immer";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h2>Main App</h2>
    </main>
  )
}

export default App
