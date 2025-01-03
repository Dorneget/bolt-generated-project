import React, { useState } from 'react';
    import TodoList from './components/TodoList';
    import TodoInput from './components/TodoInput';

    function App() {
      const [todos, setTodos] = useState([]);

      const addTodo = (text, deadline) => {
        setTodos([...todos, { text, deadline, id: Date.now(), completed: false }]);
      };

      const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
      };

      const updateTodo = (id, newText, newDeadline, completed) => {
        setTodos(todos.map(todo => (todo.id === id ? { ...todo, text: newText, deadline: newDeadline, completed } : todo)));
      };

      return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
            <h1 className="text-2xl font-bold mb-4">Todo App</h1>
            <TodoInput addTodo={addTodo} />
            <TodoList todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
          </div>
        </div>
      );
    }

    export default App;
