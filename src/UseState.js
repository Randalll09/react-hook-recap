import { useState } from 'react';

const UseState = () => {
  const [state, setState] = useState(0);
  const incrementState = () => setState(state + 1);
  const decrementState = () => setState(state - 1);
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={incrementState}>Increment</button>
      <button onClick={decrementState}>Decrement</button>
    </div>
  );
};

export default UseState;
