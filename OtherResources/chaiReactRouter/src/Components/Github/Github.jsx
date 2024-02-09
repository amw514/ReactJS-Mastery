import { useState, useEffect } from "react";

function Github() {
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (username) {
      fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((data) => setUserData(data));
    }
  }, [username]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(input);
  };

  return (
    <div className="text-center m-4 text-white bg-gray-600">
      <form onSubmit={handleSubmit}>
        <input
          className="p-2 m-2 rounded border border-gray-300 bg-black"
          type="text"
          placeholder="Search GitHub username"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="p-2 m-2 rounded bg-blue-500 text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
      {userData && (
        <div>
          <h2 className="text-xl">{userData.name}</h2>
          <p>{userData.bio}</p>
          <img
            className="rounded-full h-24 w-24 mx-auto"
            src={userData.avatar_url}
            alt={userData.name}
          />
        </div>
      )}
    </div>
  );
}

export default Github;
