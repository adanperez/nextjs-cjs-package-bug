'use client';

import { Manager } from '@test/cjs-module';
import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(() => {
    if (Manager) {
      Manager.init();
    }
    return 0;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
