import { useEffect, useState } from "react"

export default function UseStateDemo () {
  const [count, setCount] = useState(1)

  /**
   *  依赖数组为空时
   *  1. 首次渲染(mount)时执行setup
   *  2. 卸载(unmount)时执行 cleanup 
   */
  useEffect(() => {
    console.log('mount...')

    return () => {
      console.log('unmount...')
    }
  }, [])

  /**
   * 依赖数组不为空时
   * 1. 首次渲染(mount)时执行setup
   * 2. count由 1->2 时
   *    2.1 执行 cleanup, 此时访问count为旧值1
   *    2.2 执行 setup, 此时访问count为新值2
   * 3. 后续count更新流程与2相同
   * 4. 卸载(unmount)时执行 cleanup 
   */
  useEffect(() => {
    // SetUp: The code that we want to run
    console.log('The count is:', count)

    // CleanUp: Optional return function
    return () => {
      console.log('clean up...:', count)
    }
  }, [count]) // The dependency array

  return (
    <div className="card">
      <h1>Count: {count}</h1>

      <div style={{display: 'flex', flexDirection:"column", gap: 20}}>
        <button onClick={() => setCount(count + 1)}> +1</button>
      </div>

      <div>
        <pre>
          <code>
            useEffect(setup, deps)
          </code>
          <div>setup可以选择性的返回一个 cleanup函数</div>
        </pre>
        <pre>
            <span> 依赖数组为空时 </span>
            <ul>
              <li> 1. 首次渲染(mount)时执行setup </li>
              <li> 2. 卸载(unmount)时执行 cleanup </li>
            </ul>
        </pre>

        <pre>
            <span> 依赖数组不为空时 </span>
            <ul>
              <li> 1. 首次渲染(mount)时执行setup </li>
              <li> 2. count由 1 --&gt; 2 时 
                <ul>
                  <li> 2.1 执行 cleanup, 此时访问count为旧值1 </li>
                  <li> 2.2 执行 setup, 此时访问count为新值2 </li>
                </ul>
              </li>
              <li> 3. 后续count更新流程与2相同 </li>
              <li> 4. 卸载(unmount)时执行 cleanup </li>
            </ul>
        </pre>
      </div>
    </div>
  ) 
}
