import "./App.css";
import { useState } from "react";

function App() {
  // const [count, setCount] = useState(() => {
  //   return 4;
  // });
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState("blue");

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
    // setCount((prevCount) => prevCount - 1);
  };
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    // setCount((prevCount) => prevCount + 1);
    setTheme("red");
  };

  return (
    <>
      <section className="container">
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <span>{theme}</span>
        <button onClick={increment}>+</button>
      </section>
    </>
  );
}

export default App;
