import { memo, useEffect } from 'react';

import { Loader } from '../../components';
import TaskItem from './components/TaskItem/TaskItem';
import { useAppSelector, useAppDispatch } from 'src/hooks/hooks';

import './TaskList.css';
import { updateTasks } from 'src/store/tasksSlice';

const TaskList: React.FC = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const visibleTasks = useAppSelector((state) => state.tasks.visibleTasks);
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.tasks.loading);

  useEffect(() => {
    dispatch(updateTasks(tasks));
  }, [tasks]);

  const content = visibleTasks.map((task) => {
    return <TaskItem key={task.id} task={task} />;
  });

  return (
    <main className="task-list">
      <Loader isLoading={loading}>{content.length && !loading ? content : 'Not found'}</Loader>
    </main>
  );
};

export default memo(TaskList);
