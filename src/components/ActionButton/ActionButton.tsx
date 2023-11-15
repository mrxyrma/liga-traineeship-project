import { ButtonProps } from './ActionButton.types';
import 'src/components/ActionButton/ActionButton.css';

export function ActionButton({ text, className, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={`action-button ${className}`}>
      {text}
    </button>
  );
}
