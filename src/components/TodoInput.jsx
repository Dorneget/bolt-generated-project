import React, { useState } from 'react';

    function TodoInput({ addTodo }) {
      const [input, setInput] = useState('');
      const [deadline, setDeadline] = useState('');

      const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
          addTodo(input, deadline);
          setInput('');
          setDeadline('');
        }
      };

      return (
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-2 border rounded mb-2"
            placeholder="Add a new todo"
          />
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="w-full p-2 border rounded mb-2"
          />
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
            Add Todo
          </button>
        </form>
      );
    }

    export default TodoInput;
