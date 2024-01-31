import { useState } from "react";

function UseState1() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default UseState1;
