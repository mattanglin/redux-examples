import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux-counter';
import { Counter } from './Counter';
import './App.css';
import { AutoIncrementor } from './AutoIncrementor';

const pages = [
  'counter',
  'page2',
  'page3',
  'page4',
];

function App() {
  const [currentPage, setCurrentPage] = useState('counter');

  return (
    <Provider store={store}>
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
                {currentPage === 'page4' && (
                  <AutoIncrementor />
                )}
              </div>
            )}
          </div>
        </header>
      </div>
    </Provider>
  );
}

export default App;
