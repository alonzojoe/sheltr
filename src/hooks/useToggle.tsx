import { useState } from "react";

type useToggleProps = {
  defaultValue?: boolean;
};

const useToggle = ({ defaultValue = false }: useToggleProps) => {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = (val?: boolean) => {
    setValue((prev) => (typeof val === "boolean" ? val : !prev));
  };

  return [value, toggleValue];
};

export default useToggle;
