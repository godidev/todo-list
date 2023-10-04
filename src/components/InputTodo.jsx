import { useState } from 'react'

export default function InputTodo({ addTodo }) {
  const [inputValue, setInputValue] = useState('')

  return (
    <form onSubmit={(e) => addTodo(e, inputValue)}>
      <input
        type="text"
        name="todo"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        className="todo-input"
        placeholder="Make some biscuits..."
      />
    </form>
  )
}
