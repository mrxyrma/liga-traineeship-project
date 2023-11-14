import { useAppDispatch, useAppSelector } from 'src/hooks/hooks';
import { setVisibleTasks } from 'src/store/tasksSlice';
import { setSearchValue } from 'src/store/searchSlice';

import './SearchInput.css';

export function SearchInput() {
  const initialVisibleTasks = useAppSelector((state) => state.tasks.initialVisibleTasks);
  const searchValue = useAppSelector((state) => state.search.value);
  const dispatch = useAppDispatch();

  const onTaskSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value));
    const foundTasks = initialVisibleTasks.filter((task) => {
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
    dispatch(setSearchValue(''));
    dispatch(setVisibleTasks(initialVisibleTasks));
  };

  return (
    <div className="search-panel">
      <input className="form-control search-input" placeholder="Search" onChange={onTaskSearch} value={searchValue} />
      <button className="close" onClick={onSearchReset}>
        <i className="fa fa-close"></i>
      </button>
    </div>
  );
}
