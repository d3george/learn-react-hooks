import { memo, useCallback, useState } from "react";
import {shuffle} from 'lodash'

const allUsers = [ 'george', 'simon', 'james', 'alex', 'matthew', ]
export default function UseCallbackDemo () {
  return (
    <div>
      <Demo1 />
      <Demo2 />
    </div>
  )
}


function Demo1() {
  console.log('<-------- demo1 render --------->')
  const [users, setUsers] = useState(allUsers);

  const handleSearch = (text: string) => {
    const filteredUsers = allUsers.filter(user => user.includes(text));
    setUsers(filteredUsers)
  }

  return (
    <div className="card">
      <div className="flex justify-center">
        <button onClick={() => setUsers(shuffle(allUsers))}>Shuffle</button>
        <Search onChange={handleSearch} />
      </div>
      <div className="h-40">
        {
          users.map(user => (
            <div key={user} className="list-none">{user}</div>
          ))
        }
      </div>

      <pre>
        <div>Search 组件接受一个onChange事件</div>
        <div>👆 <code>打开控制台:</code> 每当点击 Shuffle时， Search组件都会重新渲染， </div>
        <div>👇 使用 <code>useCallback</code>处理事件，能解决该问题</div>
      </pre>

      <pre className="mt-4">
        <code>const cachedFn = useCallback(fn, dependencies)</code>
        <div>useCallback 是一个允许你在多次渲染中缓存函数的 React Hook。</div>
      </pre>
    </div> 
  )
}

function Demo2() {
  console.log('<-------- demo2 render --------->')
  const [users, setUsers] = useState(allUsers);



  const handleSearch = useCallback((text: string) => {
    const filteredUsers = allUsers.filter(user => user.includes(text));
    setUsers(filteredUsers)
  }, [])

  return (
    <div className="card">
      <div className="flex justify-center">
        <button onClick={() => setUsers(shuffle(allUsers))}>Shuffle</button>
        <Search onChange={handleSearch} />
      </div>
      <div className="h-40">
        {
          users.map(user => (
            <div key={user} className="list-none">{user}</div>
          ))
        }
      </div>
    </div> 
  )
}

  type SearchProps = {
    onChange: (text: string) => void
  }
  function SearchComponent ({onChange}: SearchProps) {
    console.info(`%c Search render`, 'color: #5BE49B');

    return (
      <input className="ml-2 border-2 border-blue-500" type="text"  placeholder="Search users..." onChange={e => onChange(e.target.value)}/>
    )
  }
  // memo 允许你的组件在 props 没有改变的情况下跳过重新渲染
  const Search = memo(SearchComponent)

