import { useState } from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return { value, onChange };
};

const UseInput = () => {
  const name = useInput('Me');
  return (
    <div>
      <input type="text" placeholder="name" {...name} />
      <p>{name.value}</p>
    </div>
  );
};

export default UseInput;
