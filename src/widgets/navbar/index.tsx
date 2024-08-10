import React, { useContext, useCallback } from 'react';
import { AppShell, Drawer, ScrollArea } from '@mantine/core';
import { DrawerContext } from '@/features/components/DrawerContext';
import { useIsResponsive } from '@/hooks/use-is-responsive';
import { NavLinks } from '@/features/components/NavLinks';

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
          onClose={onClose}
          withCloseButton={false}
          transitionProps={{ duration: 155, timingFunction: 'linear' }}
        >
          <AppShell.Navbar>
            <ScrollArea
              offsetScrollbars
              scrollbarSize={6}
              px={'12px'}
              py="0"
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
