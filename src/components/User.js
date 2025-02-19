//It's a functional based component
import { useEffect, useState } from 'react';

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {}, []);

  return (
    <div className='user-card'>
      <h1>Count={count}</h1>
      <h1>Count1={count2}</h1>
      <h2>Name:{name}</h2>
      <h2>Location:Lucknow</h2>
      <h2>Contact:sinhaprashant2016@gmail.com</h2>
    </div>
  );
};

export default User;
