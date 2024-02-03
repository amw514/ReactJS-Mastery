import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const CustomHook1 = () => {
  const [name, setName] = useLocalStorage("name", "");
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </>
  );
};

export default CustomHook1;
