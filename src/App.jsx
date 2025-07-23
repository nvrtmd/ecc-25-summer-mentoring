import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [userCount, setUserCount] = useState(0);
  const [randomUser, setRandomUser] = useState([]);
  async function fetchRandomUser() {
    const res = await fetch("/api/matching-users");
    const data = await res.json();
    setRandomUser(data);
  }

  useEffect(() => {
    fetchRandomUser();
  }, [userCount]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setUserCount((userCount) => userCount + 1)}>
          Fetch Random User
        </button>
      </div>
      <div>
        <img src={randomUser.profileImage} alt="profile" />
        <div>{randomUser.name}</div>
        <div>{randomUser.age}</div>
        <div>{`"${randomUser.bio}"`}</div>
      </div>
    </>
  );
}

export default App;
