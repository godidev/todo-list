import './TodoItem.css'

export default function TodoItem({ todo, changeCompleted }) {
  return (
    <div className="todo-item">
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => changeCompleted(todo.id)}
        />
      </div>
      <div>
        <h3>{todo.name}</h3>
        <p>{todo.description}</p>
      </div>
    </div>
  )
}
