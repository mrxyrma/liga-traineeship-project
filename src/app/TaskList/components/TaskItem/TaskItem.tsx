import { Link } from 'react-router-dom';
import { Checkbox, ActionButton } from '../../../../components';
import { TaskProps } from 'types/taskType';
import { useAppDispatch } from 'src/hooks/hooks';
import { deleteTask } from 'src/store/tasksSlice';

import './TaskItem.css';

const TaskItem: React.FC<TaskProps> = ({ task }) => {
  let containerClassName = '';
  task.isImportant ? (containerClassName = 'important-task') : '';

  const dispatch = useAppDispatch();

  const onDeleteTask = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div className="task-item">
      <Checkbox label={task.info} containerClassName={containerClassName} />
      <div className="task-item__buttons">
        <Link to={`task_form/${task.id}`}>
          <ActionButton text="Edit" className="edit-button" />
        </Link>
        <ActionButton text="Delete" onClick={onDeleteTask} className="delete-button" />
      </div>
    </div>
  );
};

export default TaskItem;
