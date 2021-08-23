import React, { useState } from 'react';
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

  return (
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
  );
}

export default App;
