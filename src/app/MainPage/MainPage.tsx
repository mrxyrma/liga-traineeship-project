import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { SearchInput, Loader, ActionButton } from '../../components';
import TaskList from 'app/TaskList/TaskList';

import { setVisibleTasks, updateTasks } from 'src/store/visibleTasksSlice';

import './MainPage.css';
import { useAppDispatch, useAppSelector } from 'src/hooks/hooks';
import FilterButtons from 'app/FilterButtons/FilterButtons';

const MainPage: React.FC = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const visibleTasks = useAppSelector((state) => state.visibleTasks.visibleTasks);

  const dispatch = useAppDispatch();

  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    dispatch(setVisibleTasks(tasks));
  }, []);

  useEffect(() => {
    dispatch(updateTasks(tasks));
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
    dispatch(setVisibleTasks(foundTasks));
  };

  const onSearchReset = () => {
    setSearchValue('');
    dispatch(setVisibleTasks(tasks));
  };

  return (
    <>
      <header>
        <h1>TODO LIST</h1>
      </header>
      <nav className="navbar">
        <SearchInput onChange={onTaskSearch} value={searchValue} onReset={onSearchReset} />
        <FilterButtons />
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
