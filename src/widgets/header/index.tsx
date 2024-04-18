import * as React from 'react';
import { Group, Burger } from '@mantine/core';
import { AppShell } from '@mantine/core';
import styles from './Header.module.css';

interface HeaderProps {
  opened: boolean;
  toggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ opened, toggle }) => {
  const mainLinks = [
    { link: '#', label: 'ABOUT HOUTS' },
    { link: '#', label: 'HOW IT WORKS' },
    { link: '#', label: 'FUNCTIONALITY' },
    { link: '#', label: 'OUR STORY' },
    { link: '#', label: 'SUSTAINABILITY' },
    { link: '#', label: 'SUPPORT US' }
  ];

  const mainItems = mainLinks.map((item) => item.label);

  return (
    <>
      <AppShell.Header style={{ position: 'static', backgroundColor: 'red' }}>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Group justify="center" visibleFrom="sm" className={styles.mainLinks}>
          {mainItems}
        </Group>
      </AppShell.Header>
    </>
  );
};
