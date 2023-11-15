import { MouseEvent } from 'react';
import { IFilterButtonProps } from 'src/app/FilterButtons/components/FilterButton/FilterButton.types';

import './FilterButton.css';

export default function FilterButton({ text, isActive, onClick }: IFilterButtonProps) {
  const activeClass = isActive ? 'filter-button_active' : null;

  const toggleClass = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.classList.add('filter-button_active');
    document.querySelectorAll('.filter-button').forEach((item) => {
      if (item !== e.currentTarget) {
        item.classList.remove('filter-button_active');
      }
    });
    onClick(e);
  };

  return (
    <button className={`filter-button ${activeClass}`} onClick={toggleClass}>
      {text}
    </button>
  );
}
