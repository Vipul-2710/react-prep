import React from "react";

// Before
// function Child({ count }) {
//   console.log("Child rendered");
//   return <h2>Count: {count}</h2>;
// }

// After 
const Child = React.memo(function Child({ count }) {
  console.log("Child rendered");
  return <h2>Count: {count}</h2>;
});

export default Child