import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import "./App.css";

function App() {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    const dataFetcher = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setMyData(response.data);
        console.log(data);
      } catch (error) {
        console.log(error.response);
      }
    };
    dataFetcher();
  }, []);

  return (
    <>
      {myData.map((post) => {
        const { id, title, body } = post;
        return (
          <div key={id} className="card">
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
