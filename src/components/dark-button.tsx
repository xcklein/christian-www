import { useContext } from 'react';
import { IconButton } from '@/components/material';
import { DarkContext } from './dark-provider';

export function DarkButton({ className }: { className?: string }) {
  const { isDark, setIsDark } = useContext(DarkContext);

  const onButtonClick = () => {
    setIsDark(!isDark);
  };

  return (
    <IconButton color={isDark ? "white" : "black"} className={className} onClick={onButtonClick}>
      {isDark ? <i className="fas fa-moon text-lg"/> : <i className="fas fa-sun text-lg"/>}
    </IconButton>
  );
};