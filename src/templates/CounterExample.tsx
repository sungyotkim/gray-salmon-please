import React, { useState } from "react";

interface CounterExampleProps {
  children: (
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
  ) => JSX.Element | null;
}

export const CounterExample: React.FC<CounterExampleProps> = ({ children }) => {
  const [count, setCount] = useState(0);

  return <div>{children(count, setCount)}</div>;
};

// below is how it looks imported
// <Counter>
// {(count, setCount) => (
// <div>
// {count}
// <button onClick={() => setCount(count + 1)}>+</button>
// </div>
// )}
// </Counter>

// ? Alternatively
interface CounterExampleProps2 {
  children: (data: {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
  }) => JSX.Element | null;
}

// ? Then you just destructure the import <Counter>{({count, setCount})}</Counter>
