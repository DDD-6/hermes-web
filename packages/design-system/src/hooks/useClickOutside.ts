import { useState, useEffect, useRef, useCallback } from 'react';

export default function useClickOutside(callback?: (event?: Event) => void) {
  const [isOutside, setIsOutside] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: Event) => {
      const eventTarget = event.target as Node;
      let isOutsideFlag = true;

      if (ref?.current === eventTarget || ref?.current?.contains(eventTarget)) {
        isOutsideFlag = false;
      }

      setIsOutside(isOutsideFlag);

      if (isOutsideFlag) {
        callback?.(event);
      }
    },
    [callback],
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [handleClickOutside]);

  return { ref, isOutside };
}
