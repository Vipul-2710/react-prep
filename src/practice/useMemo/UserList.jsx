import { useMemo } from "react";

function UserList({ users, isDark }) {

  const sortedUsers = useMemo(() => {
    console.log("Sorting users...");
    return [...users].sort((a, b) => a.name.localeCompare(b.name));
  }, [users]); // runs only when users changes

  return (
    <div
      style={{
        background: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      {sortedUsers.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default UserList;
