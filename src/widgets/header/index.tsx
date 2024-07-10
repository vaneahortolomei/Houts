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
    { link: '#works', label: 'HOW IT WORKS' },
    { link: '#functionality', label: 'FUNCTIONALITY' },
    { link: '#', label: 'Logo', image: Logo },
    { link: '#journey', label: 'OUR STORY' },
    { link: '#sustainability', label: 'SUSTAINABILITY' },
    { link: '#support', label: 'SUPPORT US' }
  ];

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    index: number
  ) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href')?.substring(1);
    if (targetId) {
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }

      setActive(index);
    }
  };

  const mainItems = mainLinks.map((item, index) => {
    if (item.image) {
      return (
        <a
          id="#"
          href={item.link}
          key={item.label}
          className={styles.header__links}
          onClick={(event) => handleLinkClick(event, index)}
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
          onClick={(event) => handleLinkClick(event, index)}
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
