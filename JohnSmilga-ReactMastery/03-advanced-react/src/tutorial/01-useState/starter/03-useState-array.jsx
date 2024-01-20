import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItems = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  const clearAllItems = () => {
    setPeople([]);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;

        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItems(id)}>
              Remove
            </button>
          </div>
        );
      })}

      <button
        type="button"
        className="btn"
        onClick={clearAllItems}
        style={{ marginTop: "2rem" }}
      >
        Remove all
      </button>
    </>
  );
};

export default UseStateArray;
