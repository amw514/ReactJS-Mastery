import { useState, useEffect } from "react";

function App2() {
  const [windowWidth, setWindowWith] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWith(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return <h1>Window Size: {windowWidth}</h1>;
}

export default App2;
