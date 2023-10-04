import TodoItem from './TodoItem'
import './TodoList.css'

export default function TodoList({ todos }) {
  return (
    <div className="main-list">
      {todos
        .sort((a) => (a.completed === false ? -1 : 1))
        .map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
    </div>
  )
}
