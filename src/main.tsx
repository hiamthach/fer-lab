import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';

import App from './App.tsx';

import { TOAST_DEFAULT_OPTIONS } from '@/config/helpers/toast.helper.ts';
import '@/styles/index.css';
import ThemeProvider from '@/theme/ThemeProvider.tsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <App />
        <Toaster {...TOAST_DEFAULT_OPTIONS} />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
