import { useState } from "react"

export default function UseStateDemo () {
  const [count, setCount] = useState(0)
  return (
    <div className="card">
      <h1>Count: {count}</h1>

      <div style={{display: 'flex', flexDirection:"column", gap: 20}}>
        <button onClick={() => setCount(count - 1)}> -1</button>
        <button onClick={() => setCount(count + 1)}> +1</button>

        <div style={{display: 'flex'}}>
          <button 
            onClick={() => {
              setCount(count + 1)
              setCount(count + 1)
              setCount(count + 1)
            }}
          > +3</button>

          <pre>
            <code>setCount(count + 1)</code>
          </pre>
        </div>

        <div style={{display: 'flex'}}>
          <button 
            onClick={() => {
              setCount(prev => prev + 1)
              setCount(prev => prev + 1)
              setCount(prev => prev + 1)
            }}
          > +3</button>

          <pre>
            <code>setCount(prev =&gt; prev + 1)</code>
          </pre>
        </div>

      </div>

    </div>
  ) 
}
