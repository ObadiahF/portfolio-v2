import { useTypingEffect } from '../../hooks/useTypingEffect';
import type { TerminalPromptProps } from '../../types';

export const TerminalPrompt = ({
  command,
  delay = 0
}: TerminalPromptProps) => {
  const { displayedText, isComplete } = useTypingEffect(command, 40, delay, 5000);

  return (
    <div className="flex items-center gap-2 font-mono text-sm md:text-base mb-4">
      <span style={{ color: '#34d399' }}>→</span>
      <span style={{ color: '#71717a' }}>~</span>
      <span style={{ color: '#ffffff' }}>{displayedText}</span>
      {!isComplete && (
        <span className="w-2 h-4 animate-pulse" style={{ backgroundColor: '#34d399' }} />
      )}
    </div>
  );
};
