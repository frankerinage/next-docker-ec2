'use client';

import GlobalContext from '@/lib/store/GlobalContext';
import { useContext } from 'react';

const Counter = () => {
  const { count, decrement, increment } = useContext(GlobalContext);

  return (
    <div className="my-10">
      <div>
        <p>Count: {count}</p>

        <div className="flex gap-2 mt-4">
          <button onClick={decrement}>Decrement</button>
          <button onClick={increment}>Increment</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
