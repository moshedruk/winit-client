import React, { useState } from 'react'

export default function Register() {

    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

    const handleRegister = async () => {
        try {
            const res = await fetch("http://localhost:2233/userauth/register", {
                method: "post",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({username, password}),
              });
              const data = await res.json();
        } catch (err) {
            console.log({err})
        }
      }
  return (
    <div>
        <input
        type="text"
        placeholder="User Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      
      <button onClick={handleRegister}>
        Login
      </button>
      
    </div>
  )
}
