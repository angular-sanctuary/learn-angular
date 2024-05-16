
TODO : change with jwt example
TODO : make an example with a custom hook
TODO : make an example with server side (no localstorage available)

```
// useEffect example to fetch and persist between UI state and localStorage
import React from 'react'

export default function Counter() {
  // initial value last saved localstorage if exists else 0
  let initialState = JSON.parse(localStorage.getItem('count') || 0)

  let [count, setCount] = React.useState(initialState);

  let handleIncrement = () => setCount(count + 1)

  let handleReset = () => setCount(0);

  // useEffect listen for changes to count and persist state change to localStorage
  React.useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count))
  },[count])

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
```
