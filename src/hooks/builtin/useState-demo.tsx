import { useState } from "react"

export default function UseStateDemo () {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Count: {count}</h1>

      <div style={{display: 'flex', flexDirection:"column", gap: 20}}>
        <button onClick={() => setCount(count - 1)}> -1</button>
        <button onClick={() => setCount(count + 1)}> +1</button>
        <button 
          title=" setCount(count + 1) "
          onClick={() => {
            setCount(count + 1)
            setCount(count + 1)
            setCount(count + 1)
          }}
        > +3</button>

        <button 
          title=" setCount(prev => prev + 1) "
          onClick={() => {
            setCount(prev => prev + 1)
            setCount(prev => prev + 1)
            setCount(prev => prev + 1)
          }}
        > +3</button>
      </div>

    </div>
  ) 
}
