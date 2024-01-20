import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h2>You clicked {count} times.</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Increase Count
      </button>
    </>
  );
};

export default UseStateBasics;
