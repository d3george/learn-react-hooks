import { useRef } from "react";

/**
 * 可以将ref视为与state类似的东西，只不过ref不会 trigger render
 */
export default function UseRefDemo () {
  console.log('<-------- useRef demo render --------->')
  // const [count, setCount] = useState(0);
  const countRef= useRef(0)

  const handleIncrement = () => {
    // setCount(count + 1)
    countRef.current++

    // console.log('State:', count)
    console.log('Ref:', countRef.current)
  }
 return  (
  <div className="card">
    <div>
      <h1> countRef: {countRef.current} </h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>

    <pre>
        <div>👆 <code>打开控制台:</code>点击 Increment,可以看到 countRef的值发生了变化，但是页面并没有更新 </div>
        <div>这是因为 <code>useRef</code>不会触发更新</div>
      </pre>
  </div>
 )
}
