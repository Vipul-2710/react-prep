⚡ Ways to Optimize React Performance
🧠 Golden Rule

Prevent unnecessary re-renders first.
Most React performance issues come from extra renders, not slow JS.

1️⃣ Use React.memo (Component Memoization)
❌ Without memo
function Child({ value }) {
  console.log("Rendered");
  return <p>{value}</p>;
}

✅ With memo
const Child = React.memo(({ value }) => {
  return <p>{value}</p>;
});


✔ Prevents re-render when props don’t change
✔ Best for pure components

2️⃣ Use useCallback (Memoize Functions)
❌ Problem
const handleClick = () => setCount(count + 1);

✅ Solution
const handleClick = useCallback(() => {
  setCount(c => c + 1);
}, []);


✔ Prevents child re-renders caused by new function references

3️⃣ Use useMemo (Memoize Expensive Calculations)
const expensiveValue = useMemo(() => {
  return heavyCalculation(data);
}, [data]);


✔ Prevents recalculations
❌ Don’t overuse — only for expensive logic

4️⃣ Avoid Unnecessary State

❌ Bad

const [fullName, setFullName] = useState(first + last);


✅ Good

const fullName = `${first} ${last}`;


✔ Derived values should NOT be state

5️⃣ Split Components (Smaller = Faster)

❌ One large component
✅ Multiple focused components

<Header />
<Content />
<Footer />


✔ Reduces re-render scope

6️⃣ Lazy Loading & Code Splitting
const Dashboard = React.lazy(() => import("./Dashboard"));

<Suspense fallback={<Loader />}>
  <Dashboard />
</Suspense>


✔ Faster initial load
✔ Essential for large apps

7️⃣ Virtualize Large Lists (VERY IMPORTANT)
❌ Rendering 1000+ items
items.map(item => <Item key={item.id} />)

✅ Use virtualization

react-window

react-virtualized

<FixedSizeList
  height={400}
  itemCount={items.length}
  itemSize={50}
>
  {Row}
</FixedSizeList>


✔ Huge performance boost

8️⃣ Optimize State Management

✔ Keep state local
✔ Avoid prop drilling using Context carefully
✔ Use React Query for server state

const { data } = useQuery(["users"], fetchUsers);

9️⃣ Avoid Inline Objects & Functions

❌ Bad

<Component style={{ margin: 10 }} />


✅ Good

const style = { margin: 10 };
<Component style={style} />


✔ Prevents unnecessary renders

🔟 Keys & Lists (Small but Important)

❌ Bad

{items.map((item, i) => <Item key={i} />)}


✅ Good

{items.map(item => <Item key={item.id} />)}


✔ Stable keys = correct reconciliation

1️⃣1️⃣ Production Build Optimization
npm run build


✔ Minification
✔ Dead code elimination
✔ Tree shaking

1️⃣2️⃣ Measure Before Optimizing
React DevTools Profiler

✔ Identify slow components
✔ Track unnecessary renders

🎯 Interview One-Liner Answer

“I optimize React performance by preventing unnecessary re-renders using memoization, splitting components, lazy loading, virtualizing large lists, optimizing state management, and measuring performance using React DevTools.”

🚫 Common Performance Mistakes

❌ Overusing useMemo
❌ Putting everything in Context
❌ Storing derived data in state
❌ Ignoring list virtualization

🧠 Quick Cheat Sheet
Problem	Solution
Extra re-renders	memo, useCallback
Slow calculations	useMemo
Large bundles	lazy + Suspense
Large lists	virtualization
API data	React Query