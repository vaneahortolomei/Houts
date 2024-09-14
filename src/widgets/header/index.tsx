import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { Burger, Container, Box, Image, Button } from '@mantine/core';
import { AppShell } from '@mantine/core';
import styles from './Header.module.scss';
import { DrawerContext } from '@/features/components/DrawerContext';
import { useIsResponsive } from '@/hooks/use-is-responsive';
import { NavLinks } from '@/features/components/NavLinks';
import Logo from '@/assets/Logo.svg';
import { useWindowScroll } from '@mantine/hooks';
import { useTranslation } from 'react-i18next';

interface MainPageType {
  isMainPage?: boolean;
}

export const Header: React.FC<MainPageType> = ({ isMainPage }) => {
  const { setDrawerOpen } = useContext(DrawerContext);
  const isResponsive = useIsResponsive(1024);

  const [scroll] = useWindowScroll();
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage, i18n]);

  const toggleLanguage = () => {
    const newLanguage = selectedLanguage === 'de' ? 'en' : 'de';
    setSelectedLanguage(newLanguage);
  };

  return (
    <>
      {isMainPage ? (
        <AppShell.Header
          className={styles.header}
          style={{
            boxShadow: isResponsive
              ? scroll.y > 10
                ? '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)'
                : 'none'
              : ''
          }}
        >
          {isResponsive && (
            <Box className={styles.header__mobile}>
              <Button
                variant="subtle"
                className={styles.header__lang}
                onClick={toggleLanguage}
              >
                {selectedLanguage === 'en' ? 'DE' : 'EN'}
              </Button>
              <Box className={styles.header__mobile_logo}>
                <Image src={Logo} h={19} w={123} alt={'Logo'} />
              </Box>
              <Burger
                aria-label="Toggle navigation"
                size="md"
                onClick={() => setDrawerOpen(true)}
              />
            </Box>
          )}
          {!isResponsive && (
            <Container fluid style={{ display: 'flex' }}>
              <NavLinks isMainPage={isMainPage} />
              <Button
                variant="subtle"
                className={styles.header__lang}
                onClick={toggleLanguage}
              >
                {selectedLanguage === 'en' ? 'DE' : 'EN'}
              </Button>
            </Container>
          )}
        </AppShell.Header>
      ) : (
        <AppShell.Header className={styles.emptyHeader}>
          <Container fluid maw={'1500px'} style={{ display: 'flex' }}>
            <NavLinks isMainPage={isMainPage} />
            <Button
              variant="subtle"
              className={styles.header__lang}
              onClick={toggleLanguage}
            >
              {selectedLanguage === 'en' ? 'DE' : 'EN'}
            </Button>
          </Container>
        </AppShell.Header>
      )}
    </>
  );
};
