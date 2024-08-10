import * as React from 'react';
import { AppShell, Affix, Button, Transition, rem, Text } from '@mantine/core';
import { Header, Navbar, Main, Footer } from '@/widgets';
import { IconArrowUp } from '@tabler/icons-react';
import { useWindowScroll } from '@mantine/hooks';
import { DrawerProvider } from '@/features/components/DrawerContext';
import { useIsResponsive } from '@/hooks/use-is-responsive';

export const BaseTemplate = () => {
  const [scroll, scrollTo] = useWindowScroll();
  const isResponsive = useIsResponsive(1024);

  return (
    <>
      <DrawerProvider>
        <AppShell
          withBorder={false}
          header={{ height: 60 }}
          navbar={{ width: isResponsive ? 280 : 0, breakpoint: 'sm' }}
          footer={{ height: 100 }}
          padding="md"
          styles={{
            main: {
              width: isResponsive ? '100%' : '',
              minHeight: isResponsive ? 'auto' : '100vh',
              height: isResponsive ? 'auto' : 'initial'
            }
          }}
          sx={{ overflow: isResponsive ? 'auto' : 'hidden' }}
        >
          <Header />
          <Navbar />
          <Main />
          <Footer />
          <Affix position={{ bottom: 20, right: 20 }}>
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
                    backgroundColor: '#222027',
                    ...transitionStyles
                  }}
                  onClick={() => scrollTo({ y: 0 })}
                >
                  SCROLL TO TOP
                </Button>
              )}
            </Transition>
          </Affix>
          <Affix position={{ bottom: 60, right: 20 }}>
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
                    backgroundColor: '#A74127',
                    width: '152px',
                    ...transitionStyles
                  }}
                >
                  <Text
                    fz="12px"
                    fw="600"
                    lineClamp={1.5}
                    style={{ color: '#fff', width: 100, lineHeight: 1.2 }}
                  >
                    JOIN THE WAITING LIST
                  </Text>
                </Button>
              )}
            </Transition>
          </Affix>
        </AppShell>
      </DrawerProvider>
    </>
  );
};
