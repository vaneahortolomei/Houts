import * as React from 'react';
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Header, Navbar, Footer } from '@/widgets';

export const BaseTemplate = () => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: 'sm',
          collapsed: { desktop: true, mobile: !opened }
        }}
        footer={{ height: 100 }}
        padding="md"
      >
        <Header opened={opened} toggle={toggle} />
        <Navbar />
        <Footer />
      </AppShell>
    </>
  );
};
