import * as React from 'react';
import { AppShell, Affix, Button, Transition, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Header, Navbar, Main, Footer } from '@/widgets';
import { IconArrowUp } from '@tabler/icons-react';
import { useWindowScroll } from '@mantine/hooks';

export const BaseTemplate = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <AppShell
        withBorder={false}
        header={{ height: 60 }}
        navbar={{
          width: 100,
          breakpoint: 'sm',
          collapsed: { desktop: true, mobile: !opened }
        }}
        footer={{ height: 100 }}
        padding="md"
      >
        <Header opened={opened} toggle={toggle} />
        <Navbar />
        <Main />
        <Footer />
        <Affix position={{ bottom: 20, right: 20 }}>
          <Transition transition="slide-up" mounted={scroll.y > 0}>
            {(transitionStyles) => (
              <Button
                leftSection={
                  <IconArrowUp
                    style={{ width: rem(16), height: rem(16), color: '#fff' }}
                  />
                }
                style={{ backgroundColor: '#A74127', ...transitionStyles }}
                onClick={() => scrollTo({ y: 0 })}
              >
                Scroll to top
              </Button>
            )}
          </Transition>
        </Affix>
      </AppShell>
    </>
  );
};
