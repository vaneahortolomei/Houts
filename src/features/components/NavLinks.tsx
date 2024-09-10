import styles from '@/widgets/header/Header.module.scss';
import { Group, NavLink } from '@mantine/core';
import React, { useEffect } from 'react';
import Logo from '@/assets/Logo.svg';
import { useState } from 'react';
import { useIsResponsive } from '@/hooks/use-is-responsive';
import { DrawerContext } from '@/features/components/DrawerContext';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

interface MainPageType {
  isMainPage?: boolean;
}

export const NavLinks: React.FC<MainPageType> = ({ isMainPage }) => {
  const [active, setActive] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const isResponsive = useIsResponsive(1024);
  const isResponsive1100 = useIsResponsive(1100);
  const { setDrawerOpen } = useContext(DrawerContext);
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const mainLinksForEmptyHeader = [
    { id: 1, link: '', label: 'Logo', image: Logo },
    {
      id: 2,
      link: 'https://forms.monday.com/forms/d78eb79b6a002fabefb77e0e504f2592?r=use1',
      label: `${t('lang.nav.label')}`,
      target: true
    }
  ];

  const mainLinks = [
    { id: 0, link: 'about', label: `${t('lang.nav.about')}` },
    { id: 1, link: 'works', label: `${t('lang.nav.works')}` },
    { id: 2, link: 'functionality', label: `${t('lang.nav.functionality')}` },
    { id: 3, link: '', label: 'Logo', image: Logo },
    { id: 4, link: 'journey', label: `${t('lang.nav.journey')}` },
    { id: 5, link: 'sustainability', label: `${t('lang.nav.sustainability')}` },
    {
      id: 6,
      link: 'https://forms.monday.com/forms/d78eb79b6a002fabefb77e0e504f2592?r=use1',
      label: `${t('lang.nav.label')}`,
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

      setTimeout(() => {
        window.scrollTo({
          top: targetElement?.offsetTop,
          behavior: 'smooth'
        });
      }, 120);

      setActive(index);
      setDrawerOpen(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 180);

    return () => clearTimeout(timer);
  }, [currentLanguage]);

  const mainEmptyLinks = mainLinksForEmptyHeader.map((item, index) => {
    if (item.image) {
      return (
        <>
          <a
            href={`/`}
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
        </>
      );
    } else {
      return (
        <>
          {!isResponsive1100 && (
            <NavLink<'a'>
              label={isLoading ? '' : item.label}
              href={item.link}
              target="_blank"
              key={item.id}
              className={styles.header__links_target}
              active={index === active}
              variant="subtle"
              onClick={() => setDrawerOpen(false)}
              style={{
                width: 175,
                padding: currentLanguage === 'en' ? '5px 35px' : '5px 25px'
              }}
            />
          )}
        </>
      );
    }
  });

  const mainItems = mainLinks.map((item, index) => {
    if (item.image) {
      return (
        <>
          {!isResponsive && (
            <a
              href={`/`}
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
        <>
          {!isResponsive1100 && (
            <NavLink<'a'>
              label={isLoading ? '' : item.label}
              href={item.link}
              target="_blank"
              key={item.id}
              className={styles.header__links_target}
              active={index === active}
              variant="subtle"
              onClick={() => setDrawerOpen(false)}
              style={{
                width: 175,
                padding: currentLanguage === 'en' ? '5px 35px' : '5px 25px'
              }}
            />
          )}
        </>
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
      {isMainPage ? mainItems : mainEmptyLinks}
    </Group>
  );
};
