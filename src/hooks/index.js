const { useState, useEffect } = require('react');

function useDebounce(value, delay) {
  const [debounce, setDebounce] = useState(value);

  useEffect(() => {
    const handleTimeout = setTimeout(() => setDebounce(value), delay);

    return () => {
      clearTimeout(handleTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return debounce;
}

export default useDebounce;
