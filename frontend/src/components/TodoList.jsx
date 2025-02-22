import { useState } from 'react'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'

export default function TodoList() {
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    if (text.trim().length === 0) return
    setTodos([...todos, { id: Date.now(), text, completed: false }])
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Todo List</h1>
      <TodoForm onSubmit={addTodo} />
      <div className="space-y-2 mt-4">
        {todos.map(todo => (
          <TodoItem 
            key={todo.id}
            todo={todo}
            onToggle={() => toggleTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </div>
    </div>
  )
}