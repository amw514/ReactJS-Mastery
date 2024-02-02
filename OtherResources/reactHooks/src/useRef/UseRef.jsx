import { useState, useEffect, useRef } from "react";

const UseRef = () => {
  const [text, setText] = useState("");
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>My text : {text}</div>
      <div> Rendered : {renderCount.current} </div>
    </>
  );
};

export default UseRef;
