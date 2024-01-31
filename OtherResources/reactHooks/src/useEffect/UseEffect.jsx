import { useState, useEffect } from "react";
import axios from "axios";
function UseEffect() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItem] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${resourceType}`
      );
      const data = response.data;
      setItem(data);
    };

    dataFetch();
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
        return (
          <pre key={item.id}>
            {resourceType === "posts"
              ? item.title
              : resourceType === "users"
              ? item.name
              : resourceType === "comments"
              ? item.body
              : null}
          </pre>
        );
      })}
    </>
  );
}

export default UseEffect;
