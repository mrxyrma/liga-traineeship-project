import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { SearchInput, Loader, ActionButton } from '../../components';
import FilterButton from './components/FilterButton/FilterButton';
import TaskList from 'app/TaskList/TaskList';

import './MainPage.css';
import { useAppSelector } from 'src/hooks/hooks';

const MainPage: React.FC = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const [visibleTasks, setVisibleTasks] = useState(tasks);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const update = visibleTasks.map((task) => {
      const updateTask = tasks.filter((item) => item.id === task.id);
      return updateTask[0];
    });
    setVisibleTasks(update);
  }, [tasks]);

  const onTaskSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    const foundTasks = tasks.filter((task) => {
      if (
        task.info.toLowerCase().includes(e.target.value.trim().toLowerCase()) ||
        task.name.toLowerCase().includes(e.target.value.trim().toLowerCase())
      ) {
        return task;
      }
    });
    setVisibleTasks(foundTasks);
  };

  const onSearchReset = () => {
    setSearchValue('');
    setVisibleTasks(tasks);
  };

  return (
    <>
      <header>
        <h1>TODO LIST</h1>
      </header>
      <nav className="navbar">
        <SearchInput onChange={onTaskSearch} value={searchValue} onReset={onSearchReset} />
        <div className="filter-buttons">
          <FilterButton text="All" isActive={true} />
          <FilterButton text="Active" isActive={false} />
          <FilterButton text="Done" isActive={false} />
          <FilterButton text="Important" isActive={false} />
        </div>
      </nav>
      <Loader isLoading={false}>
        <TaskList tasks={visibleTasks} />
      </Loader>
      <Link to={'task_form'}>
        <ActionButton text="Add task" className="add-task-button" />
      </Link>
    </>
  );
};

export default MainPage;
