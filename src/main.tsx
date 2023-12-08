import React from 'react';

import ReactDOM from 'react-dom/client';

import './index.css';
import QueryProvider from './provider/query-provider';
import LayoutConfigProvider from './provider/theme-config-provider';
import Routes from './routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LayoutConfigProvider>
      <QueryProvider>
        <Routes />
      </QueryProvider>
    </LayoutConfigProvider>
  </React.StrictMode>,
);
