import './TodoItem.css'

export default function TodoItem({ todo, changeCompleted }) {
  const getStyle = () => {
    return {
      textDecoration: todo.completed ? 'line-through' : 'none',
    }
  }

  return (
    <div className="todo-item">
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => changeCompleted(todo.id)}
        />
      </div>
      <div style={getStyle()}>
        <h3>{todo.name}</h3>
        <p>{todo.description}</p>
      </div>
    </div>
  )
}
