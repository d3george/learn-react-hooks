// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useLayoutEffect, useEffect, useState } from 'react';

const userIds = [1, 2];

const UseLayoutEffectDemo = ()=> {
  return (
    <div>
      <Demo1 />
      <Demo2 />
    </div>
  )
}

export default UseLayoutEffectDemo

const  Demo1 = () => {
  console.log('<-------- demo1 render --------->')
  const [userId, setUserId] = useState(userIds[0]);
  const [isAdmin, setIsAdmin] = useState(false);

  // This artificially slows down rendering
  const now = performance.now();
  while (performance.now() - now < 200) {
    // Do nothing for a bit...
  }

  useEffect(() => {
    console.log('demo1: paint done');
  });

  useEffect(() => {
    setIsAdmin(userId === userIds[0]);
    console.log('demo1: isAdmin change, trigger');
  }, [userId]);

  const handleChange = () => {
    const otherId = userIds.find((id) => id !== userId)!;
    setUserId(otherId);
    console.log('demo1: userId change, trigger');
  };

  return (
    <div>
      <div className="card">
        <div>useEffect</div>
        <p>userId: {userId}</p>
        <p>Admin: {isAdmin ? 'true' : 'false'}</p>
        <button onClick={handleChange}>Change User</button>
      </div>
      <pre style={{display: 'flex', flexDirection: 'column', gap: 20}}>
        <div>👆 上面案例 点击 Change User 后, userId 和 admin 不会同时更新</div>
        <div>这是因为 useEffect 总是在 paint 之后执行</div>
        <div>👇 使用 <code> useLayoutEffect </code> 可以实现 useId 和 admin 同时更新</div>
        <div>因为 useLayoutEffect 会在 paint 之前执行</div>
      </pre>

    </div>
  );
};

const Demo2 = () => {
  console.log('<-------- demo2 render --------->')
  const [userId, setUserId] = useState(userIds[0]);
  const [isAdmin, setIsAdmin] = useState(false);

  // This artificially slows down rendering
  const now = performance.now();
  while (performance.now() - now < 200) {
    // Do nothing for a bit...
  }

  useEffect(() => {
    console.log('demo2: paint done');
  });

  useLayoutEffect(() => {
    setIsAdmin(userId === userIds[0]);
    console.log('demo2: isAdmin change, trigger');
  }, [userId]);

  const handleChange = () => {
    const otherId = userIds.find((id) => id !== userId)!;
    setUserId(otherId);
    console.log('demo2: userId change, trigger');
  };

  return (
    <div>
      <div className="card">
        <div>useLayoutEffect</div>
        <p>userId: {userId}</p>
        <p>Admin: {isAdmin ? 'true' : 'false'}</p>
        <button onClick={handleChange}>Change User</button>
      </div>

    </div>
  );
};

