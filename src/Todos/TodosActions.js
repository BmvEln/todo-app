import { FiRefreshCw, FiTrash2 } from 'react-icons/fi';
import Button from '../UI/Button';
import styles from './TodosActions.module.css';

const TodosActions = ({
  resetTodo,
  deleleCompletedTodos,
  completedTodosExist,
}) => {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title="Reset all tasks" onClick={resetTodo}>
        <FiRefreshCw />
      </Button>
      <Button
        title="Clear Completed Todos"
        onClick={deleleCompletedTodos}
        disabled={!completedTodosExist}
      >
        <FiTrash2 />
      </Button>
    </div>
  );
};

export default TodosActions;
