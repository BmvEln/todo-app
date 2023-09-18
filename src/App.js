import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import './App.css';
import TodoForm from './Todos/TodoForm';
import TodoList from './Todos/TodoList';
import TodosActions from './Todos/TodosActions';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  };

  const resetTodoHandler = () => {
    setTodos([]);
  };

  const deleleCompletedTodosHandler = () => {
    // Незавершенные задачи будут как true, а filter возвращает элементы трушные, остальные фолсные идут лесом.
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;
  console.log(completedTodosCount);

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} todos={todos} />
      {!!todos.length && (
        <TodosActions
          completedTodosExist={!!completedTodosCount}
          resetTodo={resetTodoHandler}
          deleleCompletedTodos={deleleCompletedTodosHandler}
        />
      )}
      <TodoList
        todos={todos}
        setTodos={setTodos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {completedTodosCount > 0 && (
        <h2>{`You have completed ${completedTodosCount} ${
          completedTodosCount > 1 ? 'todos' : 'todo'
        }`}</h2>
      )}
    </div>
  );
}

export default App;
