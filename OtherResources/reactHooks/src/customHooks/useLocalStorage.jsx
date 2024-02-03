import { useState } from "react";

function getSavedValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;

  return initialValue;
}

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(initialValue);

  return [value, setValue];
}
