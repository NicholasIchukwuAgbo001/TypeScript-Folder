import React from "react";

const Page = async () => {
  interface User {
    id: number;
    name: string;
  }

  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await res.json();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">User List</h1>
        <p className="text-sm text-gray-500 mb-6">
          Server Time: <span className="font-medium">{new Date().toLocaleTimeString()}</span>
        </p>

        <ul className="space-y-3">
          {users.map((user) => (
            <li
              key={user.id}
              className="px-4 py-2 bg-gray-50 hover:bg-indigo-50 border border-gray-200 rounded-lg shadow-sm transition"
            >
              <span className="text-gray-800 font-medium">{user.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
