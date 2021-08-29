import { useCount } from "../hooks/useCount";

export default function CountDisplay() {
  const [count] = useCount();
  return <div>{`The current count is ${count}`}</div>;
}
