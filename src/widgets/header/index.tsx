import React from 'react';
import { useContext } from 'react';
import { Burger, Container, Box, Image } from '@mantine/core';
import { AppShell } from '@mantine/core';
import styles from './Header.module.scss';
import { DrawerContext } from '@/features/components/DrawerContext';
import { useIsResponsive } from '@/hooks/use-is-responsive';
import { NavLinks } from '@/features/components/NavLinks';
import Logo from '@/assets/Logo.svg';
import { useWindowScroll } from '@mantine/hooks';

export const Header = () => {
  const { setDrawerOpen } = useContext(DrawerContext);
  const isResponsive = useIsResponsive(1024);
  const [scroll] = useWindowScroll();

  return (
    <AppShell.Header className={styles.header}>
      {isResponsive && (
        <Box
          className={styles.header__mobile}
          style={{
            boxShadow:
              scroll.y > 10
                ? '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)'
                : 'none'
          }}
        >
          <Box className={styles.header__mobile_logo}>
            <Image src={Logo} h={19} w={123} />
          </Box>
          <Burger
            aria-label="Toggle navigation"
            size="md"
            onClick={() => setDrawerOpen(true)}
          />
        </Box>
      )}
      {!isResponsive && (
        <Container fluid>
          <NavLinks />
        </Container>
      )}
    </AppShell.Header>
  );
};
