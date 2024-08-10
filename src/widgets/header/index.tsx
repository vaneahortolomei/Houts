import * as React from 'react';
import { useContext } from 'react';
import { Burger, Container, Box } from '@mantine/core';
import { AppShell } from '@mantine/core';
import styles from './Header.module.scss';
import { DrawerContext } from '@/features/components/DrawerContext';
import { useIsResponsive } from '@/hooks/use-is-responsive';
import { NavLinks } from '@/features/components/NavLinks';

export const Header = () => {
  const { setDrawerOpen } = useContext(DrawerContext);
  const isResponsive = useIsResponsive(1024);

  return (
    <AppShell.Header style={{ position: 'static' }} className={styles.header}>
      {isResponsive && (
        <Box>
          <Burger
            hiddenFrom={'1024px'}
            size="sm"
            onClick={() => setDrawerOpen(true)}
          />
        </Box>
      )}
      <Container fluid>
        {!isResponsive && (
          <Box>
            <NavLinks />
          </Box>
        )}
      </Container>
    </AppShell.Header>
  );
};
