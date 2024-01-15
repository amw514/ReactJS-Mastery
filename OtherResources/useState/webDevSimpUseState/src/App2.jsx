import "./App.css";
import { useState } from "react";

function App2() {
  const [name, setName] = useState("?");

  const namedButton = () => {
    setName("Lool you learned useState Hook. ❄️");
  };

  return (
    <>
      <p>Name: {name}</p>
      <button onClick={namedButton}> Name it </button>
    </>
  );
}

export default App2;
