import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItem] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItem(json));
  }, [resourceType]);

  return (
    <>
      <div>
        <button
          type="button"
          onClick={() => {
            setResourceType("posts");
          }}
        >
          Posts
        </button>
        <button
          type="button"
          onClick={() => {
            setResourceType("users");
          }}
        >
          Users
        </button>
        <button
          type="button"
          onClick={() => {
            setResourceType("comments");
          }}
        >
          Comments
        </button>
      </div>
      <h1>{resourceType}</h1>

      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
}

export default App;
