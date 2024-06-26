import React from 'react';
import '@mantine/core/styles.css';
import '@/shared/fonts/fonts.css';
import ReactDOM from 'react-dom/client';
import '../src/entities/ix18next/index.ts';
import '@mantine/carousel/styles.css';
import { BaseTemplate } from '@/templates/base';
import { MantineProvider } from '@mantine/core';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider>
      <BaseTemplate />
    </MantineProvider>
  </React.StrictMode>
);
