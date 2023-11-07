import { useState } from 'react';
import { Link } from 'react-router-dom';

import { PageContainer, SearchInput, Loader, ActionButton } from '../../components';
import FilterButton from './components/FilterButton/FilterButton';
import TaskItem from './components/TaskItem/TaskItem';

import './TaskList.css';

function Tasks() {
  const [search, setSearch] = useState('');
  const tempArrWithTasks = [
    { info: 'Сверстать страницу', isImportant: false, isCompleted: false, id: 1 },
    { info: 'Сверстать другую страницу', isImportant: false, isCompleted: false, id: 2 },
    { info: 'Добавить стили', isImportant: true, isCompleted: false, id: 3 },
  ];

  const content = tempArrWithTasks.map((task) => {
    return <TaskItem key={task.id} task={task} />;
  });

  return (
    <PageContainer>
      <header>
        <h1>TODO LIST</h1>
      </header>
      <nav className="navbar">
        <SearchInput onChange={setSearch} value={search} onReset={() => setSearch('')} />
        <div className="filter-buttons">
          <FilterButton text="All" isActive={true} />
          <FilterButton text="Active" isActive={true} />
          <FilterButton text="Done" isActive={true} />
          <FilterButton text="Important" isActive={true} />
        </div>
        <ActionButton text="Find" />
      </nav>
      <main>
        <Loader isLoading={false}>
          <div className="task-list">{content}</div>
        </Loader>
      </main>
      <Link to={'task_form'}>
        <ActionButton text="Add task" className="add-task-button" />
      </Link>
    </PageContainer>
  );
}

export default Tasks;
