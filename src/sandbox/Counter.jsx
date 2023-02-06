import {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const onAddThreeClick = () => {
    setCount(count + 1); // => resolve state => move this line away for later => setCount(0 + 1)
    setCount(count + 2); // => resolve state => move this line away for later => setCount(0 + 2)
    setCount(count + 1); // => resolve state => move this line away for later => setCount(0 + 1)
  }

  return (
    <div style={{margin: 'auto', width: '300px'}}>
      <h1>{count}</h1>
      <button onClick={onAddThreeClick}>Add 3</button>
    </div>
  );
};

export default Counter;