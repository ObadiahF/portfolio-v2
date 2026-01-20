import { useState, useEffect } from 'react';
import type { UseTypingEffectReturn } from '../types';

export const useTypingEffect = (
  text: string,
  speed: number = 50,
  delay: number = 0
): UseTypingEffectReturn => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [isComplete, setIsComplete] = useState<boolean>(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const startTyping = (): void => {
      let i = 0;
      const type = (): void => {
        if (i < text.length) {
          setDisplayedText(text.slice(0, i + 1));
          i++;
          timeout = setTimeout(type, speed);
        } else {
          setIsComplete(true);
        }
      };
      type();
    };

    timeout = setTimeout(startTyping, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayedText, isComplete };
};
