export default function TodoItem({ todo }) {
  return (
    <div>
      <h3>{todo.name}</h3>
      <p>{todo.description}</p>
    </div>
  )
}
