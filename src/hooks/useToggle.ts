import { useState } from "react";

const useToggle = (defaultValue: boolean = false) => {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = (val?: boolean) => {
    setValue((prev) => (typeof val === "boolean" ? val : !prev));
  };

  return [value, toggleValue];
};

export default useToggle;
