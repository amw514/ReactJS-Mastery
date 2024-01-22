import data from "./data";
import { useState } from "react";

const App = () => {
  const [person, setPerson] = useState(data);

  const removeAllItems = () => {
    setPerson([]);
  };

  return (
    <>
      <h3>{person.length} birthdays today</h3>
      <div>
        {person.map((people) => {
          return (
            <div key={people.id}>
              <h3>Name: {people.name}</h3>
              <h4>Age: {people.age}</h4>
              <img src={people.image} alt={people.name} className="img" />
            </div>
          );
        })}

        <button type="button" class="btn" onClick={removeAllItems}>
          Clear All
        </button>
      </div>
    </>
  );
};
export default App;
