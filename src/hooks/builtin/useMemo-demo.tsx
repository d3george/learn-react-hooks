import { useMemo, useState } from "react";

const initialItems = new Array(29_999_999).fill(0).map((_, i) => {
  return {
    id: i,
    isSelected: i === 29_999_998
  }
})
export default function UseMemoDemo () {
  return (
    <div>
      <Demo1 />

      <Demo2 />
    </div>
  )
}

function Demo1() {
  const [count, setCount] = useState(0)
  const [items] = useState(initialItems)


  // 每次render，都要执行这个耗时的遍历操作
  const selectedItem = items.find((item) => item.isSelected)


  return (
    <div>
      <div className="card">
        <h1>Count: {count}</h1>
        <h1>Selected Item: {selectedItem?.id}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>

      <pre style={{display: 'flex', flexDirection: 'column', gap: 20}}>
        <div>items是一个长度为29_999_999的数组，其中最后一项isSelected属性为true</div>
        <div>const selectedItem = items.find((item) =&gt; item.isSelected) 是一个极其耗时的操作</div>
        <div>
          &#x1F389;当连续点击Increment时，Count变化会出现跳跃现象
        </div>
        <div>👇 使用 <code>useMemo</code> 可以优化</div>
        <code>const cachedValue = useMemo(calculateValue, dependencies)</code>
        <div>useMemo 只有在dependencies改变时才重新计算cachedValue</div>
      </pre>

    </div>
  ) 
}

function Demo2() {
  const [count, setCount] = useState(0)
  const [items] = useState(initialItems)


  const selectedItem =  useMemo(() => items.find((item) => item.isSelected), [items]) 


  return (
    <div>
      <div className="card">
        <h1>Count: {count}</h1>
        <h1>Selected Item: {selectedItem?.id}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>

      <pre>const selectedItem =  useMemo(() =&gt; items.find((item) =&gt; item.isSelected), [items]) </pre>
 
    </div>
  ) 
}
 
 