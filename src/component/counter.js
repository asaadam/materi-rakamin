import { useCount } from "../hooks/useCount";

export default function Counter() {
  const [, setCount] = useCount();
  const increment = () => setCount((c) => c + 1);
  return <button onClick={increment}>Increment count</button>;
}
