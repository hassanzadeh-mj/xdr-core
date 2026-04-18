import { useState, useCallback } from "react";
import { useDebounce } from "./useDebounce";

const DEFAULT_DELAY = 300;

export interface UseSearchReturn {
  value: string;
  debouncedValue: string;
  onChange: (value: string) => void;
  reset: () => void;
}

export function useSearch(delay = DEFAULT_DELAY): UseSearchReturn {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, delay);

  const onChange = useCallback((v: string) => setValue(v), []);
  const reset = useCallback(() => setValue(""), []);

  return { value, debouncedValue, onChange, reset };
}
