import './App.css'
import data from '../data.json'
import { useState } from 'react'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState(data)

  const changeCompleted = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === Number(id)
          ? { ...todo, completed: !todo.completed }
          : { ...todo },
      ),
    )
  }

  return (
    <>
      <header>
        <h1>Todo List</h1>
      </header>
      <main>
        <TodoList todos={todos} changeCompleted={changeCompleted} />
      </main>
    </>
  )
}

export default App
