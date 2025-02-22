import { useState } from 'react'
import PropTypes from 'prop-types' // Add prop validation

/**
 * TodoForm Component - Handles the creation of new todo items
 * @param {Object} props
 * @param {Function} props.onSubmit - Callback function to handle form submission
 */
export default function TodoForm({ onSubmit }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Don't submit empty todos
    if (!text.trim()) return
    
    onSubmit(text)
    setText('') // Reset form after submission
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
        className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="New todo input" // Add accessibility label
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        disabled={!text.trim()} // Disable button when input is empty
      >
        Add
      </button>
    </form>
  )
}

// Add prop type validation
TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}