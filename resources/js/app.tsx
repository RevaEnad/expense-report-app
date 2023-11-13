import './bootstrap';

import React from 'react';
import ReactDOM from 'react-dom/client';
import Routing from './Routing';
import { AuthServiceContextProvider } from './hooks/context/AuthServiceContext';

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
    <React.StrictMode>
        <AuthServiceContextProvider>
            <Routing />
        </AuthServiceContextProvider>
    </React.StrictMode>
  );
