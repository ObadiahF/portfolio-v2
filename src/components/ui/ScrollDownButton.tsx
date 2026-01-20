import { ChevronDown } from 'lucide-react';

interface ScrollDownButtonProps {
  targetId: string;
}

export const ScrollDownButton = ({ targetId }: ScrollDownButtonProps) => {
  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleClick}
      className="absolute bottom-4 left-1/2 -translate-x-1/2 p-2 rounded-full transition-colors hover:bg-white/5 animate-bounce"
      aria-label={`Scroll to ${targetId}`}
    >
      <ChevronDown className="w-6 h-6" style={{ color: '#52525b' }} />
    </button>
  );
};
