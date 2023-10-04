import './App.css'
import data from '../data.json'
import { useState } from 'react'
import TodoList from './components/TodoList'
import InputTodo from './components/InputTodo'

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

  const addTodo = (e, content) => {
    e.preventDefault()
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: prevTodos.length + 1,
          name: 'pedro',
          description: content,
          completed: false,
        },
      ]
    })
  }

  return (
    <>
      <header>
        <h1>Todo List</h1>
      </header>
      <main>
        <InputTodo addTodo={addTodo} />
        <TodoList todos={todos} changeCompleted={changeCompleted} />
      </main>
    </>
  )
}

export default App
