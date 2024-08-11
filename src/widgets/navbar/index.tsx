import React, { useContext, useCallback } from 'react';
import { AppShell, Drawer, Image, ScrollArea } from '@mantine/core';
import { DrawerContext } from '@/features/components/DrawerContext';
import { useIsResponsive } from '@/hooks/use-is-responsive';
import { NavLinks } from '@/features/components/NavLinks';
import Logo from '@/assets/Logo.svg';
import { headerMobileHeight } from '@/shared/constants';

export const Navbar = () => {
  const { isDrawerOpen, setDrawerOpen } = useContext(DrawerContext);
  const isResponsive = useIsResponsive(1024);

  const onClose = useCallback(() => {
    setDrawerOpen(false);
  }, [setDrawerOpen]);

  return (
    <>
      {isResponsive && (
        <Drawer
          position="right"
          size="xs"
          opened={isDrawerOpen}
          title={<Image src={Logo} h={21} w={123} />}
          onClose={onClose}
          withCloseButton={true}
          transitionProps={{ duration: 155, timingFunction: 'linear' }}
          styles={{
            header: {
              height: headerMobileHeight,
              marginBottom: '20px'
            },
            title: {
              flex: 1,
              display: 'flex',
              justifyContent: 'flex-start'
            }
          }}
        >
          <AppShell.Navbar>
            <ScrollArea
              offsetScrollbars
              scrollbarSize={6}
              p="0"
              styles={{ viewport: { paddingRight: 0 } }}
              sx={{
                '& > * > *': { display: 'block !important' }
              }}
            >
              <AppShell.Section>
                <NavLinks />
              </AppShell.Section>
            </ScrollArea>
          </AppShell.Navbar>
        </Drawer>
      )}
    </>
  );
};
