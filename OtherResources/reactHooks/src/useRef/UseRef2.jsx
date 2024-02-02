import React from "react";
import { useState, useRef, useEffect } from "react";

const UseRef2 = () => {
  const [text, setText] = useState("");
  const inputRef = useRef();

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>My text : {text}</div>
      <button type="button" onClick={focus}>
        Focus
      </button>
    </>
  );
};

export default UseRef2;
