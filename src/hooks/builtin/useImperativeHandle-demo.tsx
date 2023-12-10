import _ from "lodash";
import { Ref, forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";

export default function UseImperativeHandleDemo () {
  const counterRef = useRef<CounterRef>(null)
  const inputRef = useRef<InputRef>(null)

  useEffect(() => {
    console.log('counterRef:', counterRef.current)
  })
  return (
    <div >
      <div className="card">
        <h1>Demo1</h1>
        <Counter ref={counterRef} /> 
        <button className="w-60 mt-4 bg-orange-500 bg-gradient-to-t" onClick={() => counterRef.current?.reset()}>Reset from parent</button>
      </div>


      <div className="card">
        <h1>Demo2</h1>
        <div>
          <Input  ref={inputRef} />
        </div>

        <button className="w-60 mt-4 bg-orange-500 bg-gradient-to-t" onClick={() => inputRef.current?.focus()}>Control focus from parent</button>
      </div>


      <pre style={{display: 'flex', flexDirection: 'column', gap: 20}}>
        <div> <code>useImperativeHandle </code> 是 React 中的一个 Hook，它能让你自定义由 <code>ref</code> 暴露出来的内容, 而不是将整个DOM暴漏给父组件</div>
        <div>通常与 <code>forwardRef </code> 配合使用</div>
      </pre>
    </div>
  ) 
}


/**
 * demo1
 */
type CounterRef = {
  reset: VoidFunction
}
interface CounterProps {}
function _Counter(props: CounterProps, ref: Ref<CounterRef>) {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  // 通过调用 useImperativeHandle 来自定义 ref 暴露出来的句柄
  useImperativeHandle(ref, () => ({
    reset,
  }))

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
const Counter = forwardRef(_Counter)



/**
 * demo2
 */
type InputRef = {
  focus: VoidFunction,
}
interface InputProps {}
function _Input(props: InputProps, ref: Ref<InputRef>) {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current?.focus();
      }
    };
  }, []);

  return <input className="ml-2 border-2 border-blue-500" {...props} ref={inputRef} />;
}
const Input = forwardRef(_Input)
