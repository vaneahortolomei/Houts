import React from 'react';
import '@mantine/core/styles.css';
import '@/shared/fonts/fonts.css';
import ReactDOM from 'react-dom/client';
import '../src/entities/ix18next/index.ts';
import '@mantine/carousel/styles.css';
import '../src/_mantine.scss';
import { MantineProvider } from '@mantine/core';
import App from '../src/app/app';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
