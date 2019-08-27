import * as React from 'react';
import { render } from 'react-dom';
import { DesktopNavigation } from './Components/DesktopNavigation';

import './styles.css';

import contract from './Components/DesktopNavigation/__test__/contract.json';

function App() {
  return (
    <div className="App">
      <header className="Header">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </header>
      <DesktopNavigation {...contract} />
    </div>
  );
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);
