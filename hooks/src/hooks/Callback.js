import React, { useState, useCallback } from "react";

function UCallback() {
  const [count, setCount] = useState(0);

  // useCallback returns a memoized version of the increment function
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default UCallback;
