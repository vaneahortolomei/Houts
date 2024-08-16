import styles from '@/widgets/header/Header.module.scss';
import { Group, NavLink } from '@mantine/core';
import * as React from 'react';
import Logo from '@/assets/Logo.svg';
import { useState } from 'react';
import { useIsResponsive } from '@/hooks/use-is-responsive';
import { DrawerContext } from '@/features/components/DrawerContext';
import { useContext } from 'react';

export const NavLinks = () => {
  const [active, setActive] = useState(0);
  const isResponsive = useIsResponsive(1024);
  const { setDrawerOpen } = useContext(DrawerContext);

  const mainLinks = [
    { id: 0, link: 'about', label: 'ABOUT HOUTS' },
    { id: 1, link: 'works', label: 'HOW IT WORKS' },
    { id: 2, link: 'functionality', label: 'FUNCTIONALITY' },
    { id: 3, link: '#', label: 'Logo', image: Logo },
    { id: 4, link: 'journey', label: 'OUR STORY' },
    { id: 5, link: 'sustainability', label: 'SUSTAINABILITY' },
    {
      id: 6,
      link: 'https://forms.monday.com/forms/d78eb79b6a002fabefb77e0e504f2592?r=use1',
      label: 'JOIN THE WAITING LIST',
      target: true
    }
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
      setDrawerOpen(false);
    }
  };

  const mainItems = mainLinks.map((item, index) => {
    if (item.image) {
      return (
        <>
          {!isResponsive && (
            <a
              href={`/${item.link}`}
              key={item.id}
              className={styles.header__links}
              onClick={() => setDrawerOpen(false)}
            >
              <img
                src={item.image}
                alt={item.label}
                className={styles.header__logo}
              />
            </a>
          )}
        </>
      );
    } else if (item.target) {
      return (
        <NavLink<'a'>
          label={item.label}
          href={item.link}
          target="_blank"
          key={item.id}
          className={styles.header__links_target}
          active={index === active}
          variant="subtle"
          onClick={() => setDrawerOpen(false)}
        />
      );
    } else {
      return (
        <NavLink<'a'>
          p={0}
          ta={'left'}
          label={item.label}
          href={`#${item.link}`}
          key={item.id}
          className={styles.header__links}
          active={index === active}
          onClick={(event) => handleLinkClick(event, index)}
          variant="subtle"
        />
      );
    }
  });

  return (
    <Group justify="center" className={styles.header__list}>
      {mainItems}
    </Group>
  );
};
