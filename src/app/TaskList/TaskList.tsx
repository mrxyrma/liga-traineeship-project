import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { PageContainer, SearchInput, Loader, ActionButton } from '../../components';
import FilterButton from './components/FilterButton/FilterButton';
import TaskItem from './components/TaskItem/TaskItem';
import { useAppSelector } from 'src/hooks/hooks';

import './TaskList.css';

const TaskList: React.FC = () => {
  const data = useAppSelector((state) => state.tasks.tasks);
  const tempArrWithTasksTyped = data;

  useEffect(() => {
    console.log('ren');
  }, [data]);

  const content = tempArrWithTasksTyped.map((task) => {
    return <TaskItem key={task.id} task={task} />;
  });

  return (
    <PageContainer>
      <header>
        <h1>TODO LIST</h1>
      </header>
      <nav className="navbar">
        <SearchInput />
        <div className="filter-buttons">
          <FilterButton text="All" isActive={true} />
          <FilterButton text="Active" isActive={false} />
          <FilterButton text="Done" isActive={false} />
          <FilterButton text="Important" isActive={false} />
        </div>
      </nav>
      <main>
        <Loader isLoading={false}>
          <div className="task-list">{content.length ? content : 'Not found'}</div>
        </Loader>
      </main>
      <Link to={'task_form'}>
        <ActionButton text="Add task" className="add-task-button" />
      </Link>
    </PageContainer>
  );
};

export default TaskList;
