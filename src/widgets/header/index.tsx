import * as React from 'react';
import { useState } from 'react';
import { Group, Burger, Anchor, Container } from '@mantine/core';
import { AppShell } from '@mantine/core';
import styles from './Header.module.scss';
import Logo from '@/assets/Logo.svg';

interface HeaderProps {
  opened: boolean;
  toggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ opened, toggle }) => {
  const [active, setActive] = useState(0);

  const mainLinks = [
    { link: '#about', label: 'ABOUT HOUTS' },
    { link: '#howItWorks', label: 'HOW IT WORKS' },
    { link: '#functionality', label: 'FUNCTIONALITY' },
    { link: '#', label: 'Logo', image: Logo },
    { link: '#story', label: 'OUR STORY' },
    { link: '#sustainability', label: 'SUSTAINABILITY' },
    { link: '#support', label: 'SUPPORT US' }
  ];

  const mainItems = mainLinks.map((item, index) => {
    if (item.image) {
      return (
        <a
          href={item.link}
          key={item.label}
          className={styles.header__links}
          onClick={(event) => {
            event.preventDefault();
            setActive(index);
          }}
        >
          <img
            src={item.image}
            alt={item.label}
            className={styles.header__logo}
          />
        </a>
      );
    } else {
      return (
        <Anchor<'a'>
          href={item.link}
          key={item.label}
          className={styles.header__links}
          data-active={index === active || undefined}
          onClick={(event) => {
            event.preventDefault();
            setActive(index);
          }}
        >
          {item.label}
        </Anchor>
      );
    }
  });

  return (
    <>
      <AppShell.Header style={{ position: 'static' }} className={styles.header}>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Container fluid>
          <Group
            justify="center"
            visibleFrom="sm"
            className={styles.header__list}
          >
            {mainItems}
          </Group>
        </Container>
      </AppShell.Header>
    </>
  );
};
