import { useState, useReducer } from 'react'
import {Routes, Route} from 'react-router-dom'
import { useImmerReducer } from "use-immer";
import './App.css'
import ToDoListForm from './pages/ToDoListForm';


function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h2>Main App</h2>
      <ToDoListForm />
      
    </main>
  )
}

export default App
