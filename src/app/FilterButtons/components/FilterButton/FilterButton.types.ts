export interface FilterButtonProps {
  text: string;
  isActive: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
