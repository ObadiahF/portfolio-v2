import { useState, useEffect } from 'react';
import type { UseTypingEffectReturn } from '../types';

export const useTypingEffect = (
  text: string,
  speed: number = 50,
  delay: number = 0,
  loopInterval: number = 0
): UseTypingEffectReturn => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [isComplete, setIsComplete] = useState<boolean>(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let loopTimeout: ReturnType<typeof setTimeout>;

    const startTyping = (): void => {
      setDisplayedText('');
      setIsComplete(false);
      let i = 0;

      const type = (): void => {
        if (i < text.length) {
          setDisplayedText(text.slice(0, i + 1));
          i++;
          timeout = setTimeout(type, speed);
        } else {
          setIsComplete(true);
          if (loopInterval > 0) {
            loopTimeout = setTimeout(startTyping, loopInterval);
          }
        }
      };
      type();
    };

    timeout = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(timeout);
      clearTimeout(loopTimeout);
    };
  }, [text, speed, delay, loopInterval]);

  return { displayedText, isComplete };
};
