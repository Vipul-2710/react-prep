import React, { useContext } from "react";
import { DataContext } from "./GetContextData";

function Users() {
  const { users, loading } = useContext(DataContext);

  return (
    <div>
      {loading && <p>Loading....</p>}
      <ul>
        {users && users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
}

export default Users;
