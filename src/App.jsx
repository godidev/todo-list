import './App.css'
import data from '../data.json'
import { useState } from 'react'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState(data)

  return (
    <>
      <TodoList todos={todos} />
    </>
  )
}

export default App
