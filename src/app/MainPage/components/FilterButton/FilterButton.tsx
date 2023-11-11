import { MouseEvent } from 'react';

import { FilterButtonProps } from './FilterButton.types';

import './FilterButton.css';

export default function Filter({ text, isActive }: FilterButtonProps) {
  const activeClass = isActive ? 'filter-button_active' : null;
  const toggleClass = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.classList.toggle('filter-button_active');
  };
  return (
    <button className={`filter-button ${activeClass}`} onClick={toggleClass}>
      {text}
    </button>
  );
}
