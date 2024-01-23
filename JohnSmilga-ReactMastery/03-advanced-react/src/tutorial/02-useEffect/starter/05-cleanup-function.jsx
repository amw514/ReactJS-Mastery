import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};
const RandomComponent = () => {
  useEffect(() => {
    console.log("hmm, this is interesting");
    const renId = setInterval(() => {
      console.log("HHHHHHH, set intervallllll");
    }, 1000);

    return () => {
      clearInterval(renIdf);
    };
  }, []);
  return <h1>hello there</h1>;
};
export default CleanupFunction;
