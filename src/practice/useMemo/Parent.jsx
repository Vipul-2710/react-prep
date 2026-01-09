import React, { useState } from "react";
import UserList from "./userList";

function Parent() {
  const [isDark, setIsDark] = useState(true);
  const users = [
    { name: "Vipul", age: 24, email: "vk@test.com" },
    { name: "Mayuri", age: 24, email: "vk@test.com" },
    { name: "Anand", age: 24, email: "vk@test.com" },
    { name: "Shyamali", age: 24, email: "vk@test.com" },
  ];
  return (
    <div>
      <button
        onClick={() => {
          setIsDark(!isDark);
        }}
      >
        Change theme
      </button>
      <UserList users={users} isDark={isDark} />
    </div>
  );
}

export default Parent;
