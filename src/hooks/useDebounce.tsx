import { useState, useEffect } from 'react';

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Yeni bir değer için delay başlat
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Bir sonraki değer için timeout'u temizle
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;