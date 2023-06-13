import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { QueryClientProvider, QueryClient } from 'react-query';
import '@/index.css';
import { App } from './App';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <App />
      </MantineProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);

// TODO:
// - i18n
// - mantine notifications
// - darkmode
