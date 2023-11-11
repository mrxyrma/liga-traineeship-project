import { memo } from 'react';
import TaskItem from './components/TaskItem/TaskItem';
import { TasksState } from 'types/taskType';

import './TaskList.css';

const TaskList: React.FC<TasksState> = ({ tasks }) => {
  const content = tasks.map((task) => {
    return <TaskItem key={task.id} task={task} />;
  });

  return <main className="task-list">{content.length ? content : 'Not found'}</main>;
};

export default memo(TaskList);
