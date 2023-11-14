import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { SearchInput, ActionButton } from '../../components';
import TaskList from 'app/TaskList/TaskList';
import FilterButtons from 'app/FilterButtons/FilterButtons';

import { fetchTasks } from 'src/store/tasksSlice';
import { useAppDispatch } from 'src/hooks/hooks';

import './MainPage.css';

const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return (
    <>
      <header>
        <h1>TODO LIST</h1>
      </header>
      <nav className="navbar">
        <SearchInput />
        <FilterButtons />
      </nav>
      <TaskList />
      <Link to={'task_form'}>
        <ActionButton text="Add task" className="add-task-button" />
      </Link>
    </>
  );
};

export default MainPage;
