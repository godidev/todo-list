import './App.css'
import data from '../data.json'
import { useState } from 'react'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState(data)

  return (
    <>
      <header>
        <h1>Todo List</h1>
      </header>
      <main>
        <TodoList todos={todos} />
      </main>
    </>
  )
}

export default App
