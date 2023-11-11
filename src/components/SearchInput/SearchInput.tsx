import { MouseEvent } from 'react';
import { SearchInputProps } from './SearchInput.types';

import './SearchInput.css';

export function SearchInput({ onChange, value, onReset }: SearchInputProps) {
  const onResetBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onReset();
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
