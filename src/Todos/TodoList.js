import { Reorder } from 'framer-motion';
import Todo from './Todo.js';
import styles from './TodoList.module.css';

const TodoList = ({ todos, deleteTodo, toggleTodo, setTodos }) => {
  return (
    <Reorder.Group
      as="div"
      axys="y"
      values={todos}
      onReorder={setTodos}
      className={styles.todoListContainer}
    >
      {!todos.length && <h2>Todo list is empty</h2>}

      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </Reorder.Group>
  );
};

export default TodoList;
