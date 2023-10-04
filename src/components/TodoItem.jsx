import './TodoItem.css'

export default function TodoItem({ todo }) {
  return (
    <div className="todo-item">
      <div>
        <input type="checkbox" checked={todo.completed} />
      </div>
      <div>
        <h3>{todo.name}</h3>
        <p>{todo.description}</p>
      </div>
    </div>
  )
}
