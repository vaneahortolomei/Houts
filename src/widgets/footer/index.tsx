import * as React from 'react';
import { AppShell } from '@mantine/core';

export const Footer = () => {
  return (
    <AppShell.Footer
      style={{
        position: 'static',
        backgroundColor: '#222027',
        height: '500px'
      }}
    >
      footer
    </AppShell.Footer>
  );
};
