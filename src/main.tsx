import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { QueryClientProvider, QueryClient } from 'react-query';
import { AuthProvider } from '@/store/auth-store';
import { App } from './App';
import '@/index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        {/* TODO: theme prop in MantineProvider */}
        <MantineProvider>
          <App />
        </MantineProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);

// TODO:
// - i18n
// - mantine notifications
// - darkmode
