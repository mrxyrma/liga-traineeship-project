import { memo, useEffect } from 'react';
import { Loader } from 'src/components';
import TaskItem from 'src/app/TaskList/components/TaskItem/TaskItem';
import { useAppSelector, useAppDispatch } from 'src/hooks/hooks';
import { updateTasks } from 'src/store/tasksSlice';

import 'src/app/TaskList/TaskList.css';

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
