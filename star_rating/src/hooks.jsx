import { useState } from "react";

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  return [
    //返却される配列1
    { value, onChange:e => setValue(e.target.value) },
    //返却される配列2
    () => setValue(initialValue)
  ];
};