import { AppShell } from '@mantine/core';
import { TopSection } from '@/widgets/main/top';
import { About } from '@/widgets/main/about';
import React from 'react';

export const Main = () => {
  return (
    <>
      <AppShell.Main style={{ padding: 0 }}>
        <TopSection />
        <About />
      </AppShell.Main>
    </>
  );
};
