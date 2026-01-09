import React from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("");

  return (
    <>
      <input
        placeholder="Type name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child count={count} />
    </>
  );
}
export default Parent
