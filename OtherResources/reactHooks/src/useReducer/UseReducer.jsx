import { useState, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    default:
      return state;
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  // const [count, setCount] = useState(0);
  return (
    <div>
      <button type="button" onClick={() => dispatch({ type: "increment" })}>
        Increment
      </button>
      <h1>{state.count}</h1>
      <button type="button" onClick={() => dispatch({ type: "decrement" })}>
        Decrement
      </button>
    </div>
  );
};

export default UseReducer;
