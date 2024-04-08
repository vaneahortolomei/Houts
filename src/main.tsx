import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/entities/ix18next/index';
import { BaseTemplate } from './app/app';
import { MantineProvider } from '@mantine/core';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider>
      <BaseTemplate />
    </MantineProvider>
  </React.StrictMode>
);
