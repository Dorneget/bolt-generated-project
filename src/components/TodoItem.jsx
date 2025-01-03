import React, { useState } from 'react';

    function TodoItem({ todo, removeTodo, updateTodo }) {
      const [isEditing, setIsEditing] = useState(false);
      const [newText, setNewText] = useState(todo.text);
      const [newDeadline, setNewDeadline] = useState(todo.deadline);
      const [completed, setCompleted] = useState(todo.completed);

      const handleEdit = () => {
        setIsEditing(true);
      };

      const handleSave = () => {
        updateTodo(todo.id, newText, newDeadline, completed);
        setIsEditing(false);
      };

      const handleCheckboxChange = () => {
        const newCompleted = !completed;
        setCompleted(newCompleted);
        updateTodo(todo.id, newText, newDeadline, newCompleted);
      };

      const getDeadlineColor = () => {
        if (!todo.deadline) return '';

        const deadlineDate = new Date(todo.deadline);
        const now = new Date();
        const diffInDays = Math.ceil((deadlineDate - now) / (1000 * 60 * 60 * 24));

        if (diffInDays < 0) {
          return 'bg-red-200';
        } else if (diffInDays <= 14) {
          return 'bg-orange-200';
        } else {
          return 'bg-green-200';
        }
      };

      return (
        <li className={`flex justify-between items-center p-2 rounded ${getDeadlineColor()}`}>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={completed}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <div className="flex flex-col">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    className="w-full p-1 mr-2 border rounded mb-1"
                  />
                  <input
                    type="date"
                    value={newDeadline}
                    onChange={(e) => setNewDeadline(e.target.value)}
                    className="w-full p-1 mr-2 border rounded"
                  />
                </>
              ) : (
                <>
                  <span className={completed ? 'line-through' : ''}>{todo.text}</span>
                  {todo.deadline && (
                    <div className="text-sm text-gray-500">
                      Deadline: {new Date(todo.deadline).toLocaleDateString()}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
          <div>
            {isEditing ? (
              <button
                onClick={handleSave}
                className="text-green-500 hover:text-green-700 mr-2"
              >
                Save
              </button>
            ) : (
              <button
                onClick={handleEdit}
                className="text-blue-500 hover:text-blue-700 mr-2"
              >
                Edit
              </button>
            )}
            <button
              onClick={() => removeTodo(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </div>
        </li>
      );
    }

    export default TodoItem;
