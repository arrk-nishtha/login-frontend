import React, { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setToken("");

    // Create Basic Auth header
    const credentials = btoa(`${username}:${password}`);

    try {
      const response = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: {
          "Authorization": `Basic ${credentials}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.detail || "Login failed");
        return;
      }

      setToken(data.access_token);
    } catch (err) {
      setError("Server not reachable");
    }
  };

  return (
    <div className="container">
      <h2>FastAPI Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>

      {error && <p className="error">{error}</p>}

      {token && (
        <div className="token-box">
          <h4>JWT Token</h4>
          <textarea readOnly value={token} />
        </div>
      )}
    </div>
  );
}


export default App;