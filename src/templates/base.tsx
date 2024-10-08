import React, { useEffect, useState } from 'react';
import {
  AppShell,
  Affix,
  Button,
  Transition,
  rem,
  Text,
  LoadingOverlay
} from '@mantine/core';
import { Header, Navbar, Main, Footer } from '@/widgets';
import { IconArrowUp } from '@tabler/icons-react';
import { useWindowScroll } from '@mantine/hooks';
import { DrawerProvider } from '@/features/components/DrawerContext';
import { useIsResponsive } from '@/hooks/use-is-responsive';
import {
  headerDesktopHeight,
  headerMobileHeight,
  mobileNavbar
} from '@/shared/constants';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import CookieConsentBanner from '@/features/components/CookieConsentBanner';

export const BaseTemplate = () => {
  const [scroll, scrollTo] = useWindowScroll();
  const isResponsive = useIsResponsive(1024);
  const [isLoading, setIsLoading] = useState(true);
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const [isMainPage, setIsMainPage] = useState(false);
  const location = useLocation();

  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  useEffect(() => {
    if (isOverlayVisible) {
      document.body.classList.add('loading');
    } else {
      document.body.classList.remove('loading');
    }
  }, [isOverlayVisible]);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsLoading(true);
      const timer2 = setTimeout(() => {
        setIsOverlayVisible(false);
      }, 110);

      return () => clearTimeout(timer2);
    }, 1000);

    return () => clearTimeout(timer1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      setIsMainPage(true);
    } else {
      setIsMainPage(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <>
      <Transition
        mounted={isOverlayVisible}
        transition="fade"
        duration={500}
        timingFunction="ease"
        onExited={() => setIsOverlayVisible(false)}
      >
        {(styles) => (
          <LoadingOverlay
            visible={isLoading}
            zIndex={1000}
            h={'100dvh'}
            overlayProps={{ radius: 'sm' }}
            loaderProps={{
              children: (
                <div className="loader">
                  <div className="rect top" />
                  <div className="rect bottom" />
                </div>
              )
            }}
            style={styles}
            styles={{
              root: {
                position: 'fixed'
              },
              overlay: {
                backgroundColor: '#fff'
              }
            }}
          />
        )}
      </Transition>
      <DrawerProvider>
        <AppShell
          withBorder={false}
          header={{
            height: isResponsive ? headerMobileHeight : headerDesktopHeight
          }}
          navbar={{ width: mobileNavbar, breakpoint: 'sm' }}
          footer={{ height: 100 }}
          padding="md"
          styles={{
            main: {
              width: isResponsive ? '100%' : '',
              minHeight: isResponsive ? 'auto' : '100vh',
              height: isResponsive ? 'auto' : 'initial'
            },
            navbar: {
              position: 'static'
            }
          }}
          sx={{ overflow: isResponsive ? 'auto' : 'hidden' }}
        >
          <Header isMainPage={isMainPage} />
          <Navbar isMainPage={isMainPage} />
          <Main />
          <Footer />
          <Affix position={{ bottom: 20, right: 20 }} zIndex={99}>
            <Transition transition="slide-up" mounted={scroll.y > 80}>
              {(transitionStyles) => (
                <Button
                  fz={12}
                  radius="xl"
                  leftSection={
                    <IconArrowUp
                      color="#fff"
                      style={{ width: rem(16), height: rem(16) }}
                    />
                  }
                  styles={{
                    label: {
                      color: '#fff'
                    }
                  }}
                  style={{
                    backgroundColor: '#000',
                    ...transitionStyles
                  }}
                  onClick={() => scrollTo({ y: 0 })}
                >
                  {t('lang.affix.scroll')}
                </Button>
              )}
            </Transition>
          </Affix>
          <Affix position={{ bottom: 60, right: 20 }} zIndex={99}>
            <Transition transition="slide-up" mounted={scroll.y > 80}>
              {(transitionStyles) => (
                <Button
                  component={'a'}
                  href={
                    'https://forms.monday.com/forms/d78eb79b6a002fabefb77e0e504f2592?r=use1'
                  }
                  target="_blank"
                  fz={12}
                  radius="xl"
                  styles={{
                    label: {
                      color: '#fff',
                      lineHeight: 1.2,
                      whiteSpace: 'pre-wrap'
                    }
                  }}
                  style={{
                    backgroundColor: '#000',
                    width: currentLanguage === 'de' ? 200 : 150,
                    ...transitionStyles
                  }}
                >
                  <Text
                    fz="12px"
                    fw="600"
                    lineClamp={1.5}
                    style={{
                      color: '#fff',
                      width: currentLanguage === 'de' ? 'auto' : 100,
                      lineHeight: 1.2
                    }}
                  >
                    {t('lang.affix.label')}
                  </Text>
                </Button>
              )}
            </Transition>
          </Affix>
          <CookieConsentBanner />
        </AppShell>
      </DrawerProvider>
    </>
  );
};

const loaderStyles = `
body.loading {
  overflow: hidden;
}
.loader {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 60px;
    height: 57px;
}

.rect {
    width: 50px;
    height: 27px;
    background-color: #1a1a1a;
    border-radius: 2px;
}

.top {
    animation: disappear-reappear 2s infinite ease-in-out;
}

.bottom {
    animation: disappear-reappear 2s infinite ease-in-out;
    animation-delay: 1s;
}

@keyframes disappear-reappear {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
}
`;

const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = loaderStyles;
document.head.appendChild(styleSheet);
