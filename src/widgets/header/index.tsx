import * as React from 'react';
import { Box, Burger } from '@mantine/core';
import { AppShell } from '@mantine/core';

interface HeaderProps {
  opened: boolean;
  toggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ opened, toggle }) => {
  return (
    <>
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Box>Menu</Box>
      </AppShell.Header>
    </>
  );
};
