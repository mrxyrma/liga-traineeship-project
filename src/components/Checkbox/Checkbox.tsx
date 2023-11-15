import { CheckboxProps } from 'src/components/Checkbox/Checkbox.types';

import 'src/components/Checkbox/Checkbox.css';

export function Checkbox({ label, checked, onChange, disabled, containerClassName = '' }: CheckboxProps) {
  return (
    <div className={`form-check ${containerClassName}`}>
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id={label}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <label className="form-check-label" htmlFor={label}>
        {label}
      </label>
    </div>
  );
}
