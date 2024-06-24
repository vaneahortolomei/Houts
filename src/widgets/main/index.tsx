import { AppShell } from '@mantine/core';
import { TopSection } from '@/widgets/main/top';
import { About } from '@/widgets/main/about';
import React from 'react';
import { Functionality } from '@/widgets/main/functionality';
import { BagOptions } from '@/widgets/main/options';

export const Main = () => {
  return (
    <>
      <AppShell.Main style={{ padding: 0 }}>
        <TopSection />
        <About />
        <Functionality />
        <BagOptions />
      </AppShell.Main>
    </>
  );
};
