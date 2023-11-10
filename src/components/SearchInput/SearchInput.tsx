import { MouseEvent, ChangeEvent, useState } from 'react';

import { useAppDispatch } from 'src/hooks/hooks';
import { searchTask } from 'src/store/tasksSlice';

import './SearchInput.css';

export function SearchInput() {
  const [value, setValue] = useState('');

  const dispatch = useAppDispatch();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    dispatch(searchTask(e.target.value));
  };

  const onResetBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setValue('');
  };

  return (
    <div className="search-panel">
      <input className="form-control search-input" placeholder="Search" onChange={onChange} value={value} />
      <button className="close" onClick={onResetBtnClick}>
        <i className="fa fa-close"></i>
      </button>
    </div>
  );
}
