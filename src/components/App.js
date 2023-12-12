
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [count, setCount] = useState(0);
  const countIncrease = () =>  {setCount(++count)};
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button Clicked {count} times</p>
        <button onClick={countIncrease}>Click me</button>
    </div>
  )
}

export default App
