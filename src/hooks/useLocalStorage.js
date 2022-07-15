import { useState } from 'react';

export const useLocalStorage = (defaultValue, key) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });
};
