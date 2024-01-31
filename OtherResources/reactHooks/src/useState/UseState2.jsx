import { useState } from "react";
function UseState2() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        +
      </button>
      <h3>{count}</h3>
      <button type="button" onClick={() => setCount((count) => count - 1)}>
        -
      </button>
    </div>
  );
}

export default UseState2;
