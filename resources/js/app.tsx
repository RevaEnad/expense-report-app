import './bootstrap';

import React from 'react';
import ReactDOM from 'react-dom/client';

import Main from './components/Main';
import Homepage from './components/Homepage'

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
    <React.StrictMode>
      <Main />
      <Homepage />
    </React.StrictMode>
  );