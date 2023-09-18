import { Reorder } from 'framer-motion';
import { RiTodoFill } from 'react-icons/ri';
import { FiTrash2 } from 'react-icons/fi';
import { RiCheckFill } from 'react-icons/ri';
import styles from './Todo.module.css';

const Todo = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <Reorder.Item
      value={todo}
      whileDrag={{
        scale: 1.05,
      }}
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>

      <FiTrash2
        onClick={() => deleteTodo(todo.id)}
        className={styles.deleteIcon}
      />
      <RiCheckFill
        className={styles.checkIcon}
        onClick={() => toggleTodo(todo.id)}
      />
    </Reorder.Item>
  );
};

export default Todo;
