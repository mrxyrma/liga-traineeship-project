import FilterButton from './components/FilterButton/FilterButton';
import { useAppDispatch, useAppSelector } from 'src/hooks/hooks';
import { setVisibleTasks } from 'src/store/visibleTasksSlice';
import './FilterButtons.css';

const FilterButtons = () => {
  const allTasks = useAppSelector((state) => state.tasks.tasks);
  const dispatch = useAppDispatch();

  const rebootFilter = () => {
    dispatch(setVisibleTasks(allTasks));
  };

  const setActiveFilter = () => {
    const active = allTasks.filter((task) => {
      return !task.isCompleted;
    });
    dispatch(setVisibleTasks(active));
  };

  const setDoneFilter = () => {
    const done = allTasks.filter((task) => {
      return task.isCompleted;
    });
    dispatch(setVisibleTasks(done));
  };

  const setImportantFilter = () => {
    const important = allTasks.filter((task) => {
      return task.isImportant;
    });
    dispatch(setVisibleTasks(important));
  };

  return (
    <div className="filter-buttons">
      <FilterButton text="All" isActive={true} onClick={rebootFilter} />
      <FilterButton text="Active" isActive={false} onClick={setActiveFilter} />
      <FilterButton text="Done" isActive={false} onClick={setDoneFilter} />
      <FilterButton text="Important" isActive={false} onClick={setImportantFilter} />
    </div>
  );
};

export default FilterButtons;
