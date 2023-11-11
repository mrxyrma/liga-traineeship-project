import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Checkbox, ActionButton } from '../../../../components';

import { useAppDispatch } from 'src/hooks/hooks';
import { toggleImportanceTask, toggleCompleteTask, deleteTask } from 'src/store/tasksSlice';

import { TaskProps } from 'types/taskType';

import './TaskItem.css';

const TaskItem: React.FC<TaskProps> = ({ task }) => {
  const dispatch = useAppDispatch();

  const onToggleDone = () => {
    dispatch(toggleCompleteTask(task.id));
  };

  const onToggleImportant = () => {
    dispatch(toggleImportanceTask(task.id));
  };

  const onDeleteTask = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div className="task-item">
      <Checkbox onChange={onToggleDone} />
      <div className="task-item__text-data">
        <h2
          className={`task-item__name ${task.isCompleted ? 'task-item_done' : null} ${
            task.isImportant && !task.isCompleted ? 'task-item_important' : null
          }`}>
          {task.name}
        </h2>
        <p
          className={`task-item__info ${task.isCompleted ? 'task-item_done' : null} ${
            task.isImportant && !task.isCompleted ? 'task-item_important' : null
          }`}>
          {task.info}
        </p>
      </div>
      <div className="task-item__buttons">
        <ActionButton text="!!!" onClick={onToggleImportant} className="important-button" />
        <Link to={`task_form/${task.id}`}>
          <ActionButton text="Edit" className="edit-button" />
        </Link>
        <ActionButton text="Delete" onClick={onDeleteTask} className="delete-button" />
      </div>
    </div>
  );
};

export default memo(TaskItem);
