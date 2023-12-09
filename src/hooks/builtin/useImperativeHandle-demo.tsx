import { useState } from "react";

export default function UseImperativeHandleDemo () {
  return (
    <div >
      <Counter /> 
    </div>
  ) 
}
type a = React.JSX

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  // we want to expose this to the parent
  const reset = () => {
    setCount(0)
  }
  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className="text-2xl">Count: {count}</h1>

      <button className="w-40" onClick={increment}>Increment</button>
      <button className="w-40" onClick={decrement}>Decrement</button>
    </div>
  ) 
}
