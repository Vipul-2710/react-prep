🧠 Core Idea (One Line Each)

React.memo → prevents component re-render
React.memo is a higher-order component (HOC) used for performance optimization in functional components. It works by memoizing (caching) the rendered output of a component and reusing the last rendered result if its props haven't changed, thereby preventing unnecessary re-renders. 

useMemo → prevents expensive recalculation
useMemo is a React hook that memoizes (caches) the result of an expensive calculation, preventing it from being recomputed on every render unless its dependencies change, thereby optimizing performance by skipping unnecessary work, and also helps maintain referential equality for objects/arrays to prevent unnecessary re-renders in child components. It takes a function and a dependency array, returning the cached value when dependencies are the same, and re-calculating only when they differ, making it great for slow computations or stable object references. 

useCallback → prevents function recreation
The useCallback Hook is used to memoize a callback function. Memoizing a function means caching the result of a function so that it does not need to be recalculated. The useCallback function only re-executes when one of its dependencies changes value.

1️⃣ React.memo – Memorize a Component

👉 Stops a child component from re-rendering if props haven’t changed

✅ Example
const Child = React.memo(({ count }) => {
  console.log("Child rendered");
  return <h3>{count}</h3>;
});

function Parent() {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState("");

  return (
    <>
      <input onChange={(e) => setText(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>+</button>
      <Child count={count} />
    </>
  );
}

🔍 What happens?

Typing in input → Parent re-renders

Child re-renders only if count changes

📌 Best for
✔ Pure presentational components
✔ Heavy child components

2️⃣ useMemo – Memorize a Value

👉 Prevents expensive calculation from running on every render

✅ Example
import { useMemo } from "react";

function App({ number }) {
  const expensiveCalculation = useMemo(() => {
    console.log("Calculating...");
    return number * 1000;
  }, [number]);

  return <h2>{expensiveCalculation}</h2>;
}

🔍 What happens?

Calculation runs only when number changes

📌 Best for
✔ Heavy calculations
✔ Derived data (filter, sort, map)

3️⃣ useCallback – Memorize a Function

👉 Prevents function recreation on every render

✅ Example
import { useCallback } from "react";

const Button = React.memo(({ onClick }) => {
  console.log("Button rendered");
  return <button onClick={onClick}>Click</button>;
});

function Parent() {
  const [count, setCount] = React.useState(0);

  const handleClick = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return <Button onClick={handleClick} />;
}

🔍 Why needed?

Without useCallback, a new function reference is passed every render

Causes child re-render even with React.memo

📌 Best for
✔ Passing callbacks to memoized children
✔ Event handlers

🔥 Side-by-Side Comparison
Feature	React.memo	useMemo	useCallback
Used on	Component	Value	Function
Prevents	Re-render	Re-calculation	Re-creation
Scope	Child component	Inside component	Inside component
Works with	Props	Dependencies	Dependencies
🧩 Relationship (Important Interview Point)

React.memo compares props

useMemo keeps value stable

useCallback keeps function stable

useCallback(fn) ≈ useMemo(() => fn)

⚠️ Common Mistakes

❌ Using them everywhere (over-optimization)
❌ Forgetting dependency array
❌ Using useMemo for cheap calculations

🎯 Interview One-Liner

React.memo memoizes components, useMemo memoizes values, and useCallback memoizes functions to optimize React performance.

🧪 When NOT to Use

Small apps

Cheap computations

Components that always re-render anyway