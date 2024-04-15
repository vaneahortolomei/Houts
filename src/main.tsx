import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/entities/ix18next/index.ts';
import { BaseTemplate } from '@/templates/base';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider>
      <BaseTemplate />
    </MantineProvider>
  </React.StrictMode>
);
