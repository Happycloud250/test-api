import React, { useState, useEffect } from "react";
const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((json) => setUsers(json.data));
  }, []);

  const add = () => {
    fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ first_name: "Tonny" }),
    })
      .then((response) => response.json())
      .then((tonny) => setUsers([...users, tonny]));
  };
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.first_name}</li>
        ))}
      </ul>
      <button onClick={add}>New User</button>
    </div>
  );
};
export default App;
