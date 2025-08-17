import React from "react";

const Page = async () => {
  interface User {
    id: number;
    name: string;
  }

  const res = await fetch("https://jsonplaceholder.typicode.com/users", {cache: "no-store"});
  const users: User[] = await res.json();

  return (
    <div>
      <h1>User List</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
