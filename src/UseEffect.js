import { useState, useEffect } from 'react';

const UseEffect = () => {
  const [numA, setNumA] = useState(0);
  const [numB, setNumB] = useState(0);
  useEffect(() => console.log('numA pressed'), [numA]);
  return (
    <div>
      {numA}
      <button onClick={() => setNumA(numA + 1)}>numA+1</button>
      {numB}
      <button onClick={() => setNumB(numB + 1)}>numB+1</button>
    </div>
  );
};

export default UseEffect;
