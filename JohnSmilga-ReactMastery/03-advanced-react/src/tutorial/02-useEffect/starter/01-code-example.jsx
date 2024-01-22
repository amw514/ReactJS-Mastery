import { useState, useEffect } from "react";

const CodeExample = () => {
  const [value, setValue] = useState(0);

  function sayHello() {
    console.log("heello world");
  }

  sayHello();

  useEffect(() => {
    console.log("useEffect only on first render");
  }, []);

  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default CodeExample;
