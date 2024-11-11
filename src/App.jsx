import { useState, useReducer } from 'react'
import {Routes, Route} from 'react-router-dom'
import { useImmerReducer } from "use-immer";
import './App.css'
import ToDoListForm from './pages/ToDoListForm';


function App() {

  return (
    <main>
      <h2>To Do List</h2>
      <ToDoListForm />
      
    </main>
  )
}

export default App
