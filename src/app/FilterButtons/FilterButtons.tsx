import { useAppDispatch, useAppSelector } from 'src/hooks/hooks';
import { setVisibleTasks, setInitialVisibleTasks } from 'src/store/tasksSlice';
import { setSearchValue } from 'src/store/searchSlice';

import FilterButton from 'src/app/FilterButtons/components/FilterButton/FilterButton';

import 'src/app/FilterButtons/FilterButtons.css';

const FilterButtons: React.FC = () => {
  const allTasks = useAppSelector((state) => state.tasks.tasks);
  const dispatch = useAppDispatch();

  const rebootFilter = () => {
    dispatch(setSearchValue(''));
    dispatch(setVisibleTasks(allTasks));
    dispatch(setInitialVisibleTasks(allTasks));
  };

  const setActiveFilter = () => {
    const active = allTasks.filter((task) => {
      return !task.isCompleted;
    });
    dispatch(setSearchValue(''));
    dispatch(setVisibleTasks(active));
    dispatch(setInitialVisibleTasks(active));
  };

  const setDoneFilter = () => {
    const done = allTasks.filter((task) => {
      return task.isCompleted;
    });
    dispatch(setSearchValue(''));
    dispatch(setVisibleTasks(done));
    dispatch(setInitialVisibleTasks(done));
  };

  const setImportantFilter = () => {
    const important = allTasks.filter((task) => {
      return task.isImportant;
    });
    dispatch(setSearchValue(''));
    dispatch(setVisibleTasks(important));
    dispatch(setInitialVisibleTasks(important));
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
