import React, { useState } from 'react';
import { counterCtx } from './counterCtx';
import { Counter } from './Counter';
import './App.css';

const pages = [
  'counter',
  'page2',
  'page3',
  'page4',
];

function App() {
  const [currentPage, setCurrentPage] = useState('counter');
  const [count, setCount] = useState(0);

  return (
    <counterCtx.Provider value={{ count, setCount }}>
      <div className="App">
        <header className="App-header">
          <h1>State Management with Redux</h1>
          <div>page: /{currentPage}</div>
          <ul className="nav">
            {pages.map((pageName) => (
              <li key={pageName}>
                <button onClick={() => setCurrentPage(pageName)}>{pageName}</button>
              </li>
            ))}
          </ul>
          <div>
            {currentPage === 'counter' ? (
              <Counter />
            ) : (
              <div>
                Now we're on {currentPage}
              </div>
            )}
          </div>
        </header>
      </div>
    </counterCtx.Provider>
  );
}

export default App;
