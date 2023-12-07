import { useEffect, useState } from "react"

export default function UseStateDemo () {

  console.log('<--------render --------->')
  const [count, setCount] = useState(1)

  /**
   * 依赖数组为undefined时
   * 1. 首次渲染(mount)时执行setup
   * 2. 每次更新
   *    2.1 执行 cleanup
   *    2.2 执行 setup
   * 3. 卸载(unmount)时执行 cleanup 
   */
  useEffect(() => {
    console.info(`%cdeps=undefined mount...`, 'color: #5BE49B');

    return () => {
      console.info(`%cdeps=undefined unmount...`, 'color: #5BE49B');
    }
  })

  /**
   *  依赖数组为空时
   *  1. 首次渲染(mount)时执行setup
   *  2. 卸载(unmount)时执行 cleanup 
   */
  useEffect(() => {
    console.log('%cdeps=[] mount...', 'color: #cbc0ff')

    return () => {
      console.log('%cdeps=[] unmount...', 'color: #cbc0ff')
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
    console.log(`%cdeps=[count] The count is: ${count}`, 'color: #ffb700')

    // CleanUp: Optional return function
    return () => {
      console.log(`%cdeps=[count] cleanup... ${count}`, 'color: #ffb700')
    }
  }, [count]) // The dependency array

  return (
    <div className="card">
      <h1>Count: {count}</h1>

      <div style={{display: 'flex', flexDirection:"column", gap: 20}}>
        <button onClick={() => setCount(count + 1)}> +1</button>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <pre>
          <code>
            useEffect(setup, deps)
          </code>
          <div>setup可以选择性的返回一个 cleanup函数</div>
          <div className="mt-2">
            👇<code>打开控制台:</code> 观察打印信息
          </div>
        </pre>

        <pre>
            <strong> 依赖数组为undefined(即不传)时 </strong>
            <ul>
              <li> 1. 首次渲染(mount)时执行setup </li>
              <li> 2. 每次更新
                <ul className="ml-8">
                  <li> 2.1 执行 cleanup  </li>
                  <li> 2.2 执行 setup  </li>
                </ul>
              </li>
              <li> 3. 卸载(unmount)时执行 cleanup </li>
            </ul>
        </pre>

        <pre>
            <strong> 依赖数组为空时 </strong>
            <ul>
              <li> 1. 首次渲染(mount)时执行setup </li>
              <li> 2. 卸载(unmount)时执行 cleanup </li>
            </ul>
        </pre>

        <pre>
            <strong> 依赖数组不为空时 </strong>
            <ul>
              <li> 1. 首次渲染(mount)时执行setup </li>
              <li> 2. count由 1 --&gt; 2 时 
                <ul className="ml-8">
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
