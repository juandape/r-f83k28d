import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span className="value">{count}</span>
      <button id="inc" onClick={() => setCount(count + 1)}>
        Incrementa
      </button>
    </div>
  );

  // render() {
  //   return (
  //     <div>
  //       <span className="value">0</span>
  //       <button id="inc">Incrementa</button>
  //     </div>
  //   );
  // }
}

export default App;
