import { MouseEvent } from 'react';

import { FilterButtonProps } from './FilterButton.types';

import './FilterButton.css';

export default function Filter({ text, isActive }: FilterButtonProps) {
  const toggleClass = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  return (
    <button className="filter-button" onClick={toggleClass}>
      {text}
    </button>
  );
}
