import { useState } from "react";

const useToggle = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = (val) => {
    setValue((prevValue) => (typeof val === "boolean" ? val : !prevValue));
  };

  return [value, toggleValue];
};

export default useToggle;
