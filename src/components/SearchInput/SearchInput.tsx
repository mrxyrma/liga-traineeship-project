import React, { MouseEvent } from 'react';
import './SearchInput.css';
import { SearchInputProps } from './SearchInput.types';

export function SearchInput({ onChange, value, onReset }: SearchInputProps) {
  const onResetBtnClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    if (onReset) onReset();
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
