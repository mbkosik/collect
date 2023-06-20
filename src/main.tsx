import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { QueryClientProvider, QueryClient } from 'react-query';
import { AuthProvider } from '@/store/auth-store';
import { App } from './App';
import { Theme } from '@/config/Theme';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={Theme}>
          <Notifications />
          <App />
        </MantineProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);

// TODO:
// - i18n
// - darkmode
