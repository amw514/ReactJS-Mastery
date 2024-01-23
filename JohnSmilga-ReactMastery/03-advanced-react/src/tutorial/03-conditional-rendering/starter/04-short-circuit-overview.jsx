import { useState } from "react";

const ShortCircuitOverview = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("Susan");

  return (
    <div>
      <h4>Falsy OR : {text || "Hello world"}</h4>
      <h4>Falsy AND : {text && "Hello world"}</h4>
      <h4>Truthy OR : {name || "Hello world"}</h4>
      <h4>Truthy AND : {name && "Hello world"}</h4>
    </div>
  );
};
export default ShortCircuitOverview;
