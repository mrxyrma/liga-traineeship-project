import { ButtonProps } from './ActionButton.types';
import './ActionButton.css';

export function ActionButton({ text, className }: ButtonProps) {
  return <button className={`action-button ${className}`}>{text}</button>;
}
