import { useState } from "react";
// import { people } from "../../../data";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 25,
    hobby: "reading books",
  });

  const displayPerson = () => {
    setPerson({ name: "john", age: 22, hobby: "screaming at pc" });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>Enjoy's : {person.hobby}</h3>
      <button className="btn" onClick={displayPerson}>
        show john
      </button>
    </>
  );
};

export default UseStateObject;
