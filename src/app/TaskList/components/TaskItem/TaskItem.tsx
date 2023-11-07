import { Link } from 'react-router-dom';

import { Checkbox, ActionButton } from '../../../../components';
import { TaskItemProps } from './TaskItem.types';

import './TaskItem.css';

export default function TaskItem({ task }: TaskItemProps) {
  let containerClassName = '';
  task.isImportant ? (containerClassName = 'important-task') : '';

  return (
    <div className="task-item">
      <Checkbox label={task.info} containerClassName={containerClassName} />
      <div className="task-item__buttons">
        <Link to={`task_form/${task.id}`}>
          <ActionButton text="Edit" />{' '}
        </Link>
        <ActionButton text="Delete" />
      </div>
    </div>
  );
}
