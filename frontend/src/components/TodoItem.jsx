import { FaTrash } from 'react-icons/fa'
import PropTypes from 'prop-types'

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={onToggle}
          className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        <span className={`${todo.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={onDelete}
        className="text-red-500 hover:text-red-700 transition-colors"
      >
        <FaTrash />
      </button>
    </div>
  )
}