// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useLayoutEffect, useEffect, useState } from 'react';

const userIds = [1, 2];

export const  UseLayoutEffectDemo1 = () => {
  const [userId, setUserId] = useState(userIds[0]);
  const [isAdmin, setIsAdmin] = useState(false);

  // This artificially slows down rendering
  const now = performance.now();
  while (performance.now() - now < 200) {
    // Do nothing for a bit...
  }
  console.log('render');

  useEffect(() => {
    console.log('paint done');
  });

  // useLayoutEffect(() => {
  //   setIsAdmin(userId === userIds[0]);
  //   console.log('isAdmin change, trigger');
  // }, [userId]);

  useEffect(() => {
    setIsAdmin(userId === userIds[0]);
    console.log('isAdmin change, trigger');
  }, [userId]);

  const handleChange = () => {
    const otherId = userIds.find((id) => id !== userId)!;
    setUserId(otherId);
    console.log('userId change, trigger');
  };

  return (
    <div className="tutorial-shorts">
      <div>useEffect</div>
      <p>userId: {userId}</p>
      <p>Admin: {isAdmin ? 'true' : 'false'}</p>
      <button onClick={handleChange}>Change User</button>
    </div>
  );
};

export const UseLayoutEffectDemo2 = () => {
  const [userId, setUserId] = useState(userIds[0]);
  const [isAdmin, setIsAdmin] = useState(false);

  // This artificially slows down rendering
  const now = performance.now();
  while (performance.now() - now < 200) {
    // Do nothing for a bit...
  }
  console.log('render');

  useEffect(() => {
    console.log('paint done');
  });

  useLayoutEffect(() => {
    setIsAdmin(userId === userIds[0]);
    console.log('isAdmin change, trigger');
  }, [userId]);

  const handleChange = () => {
    const otherId = userIds.find((id) => id !== userId)!;
    setUserId(otherId);
    console.log('userId change, trigger');
  };

  return (
    <div className="tutorial-shorts">
      <div>useLayoutEffect</div>
      <p>userId: {userId}</p>
      <p>Admin: {isAdmin ? 'true' : 'false'}</p>
      <button onClick={handleChange}>Change User</button>
    </div>
  );
};

