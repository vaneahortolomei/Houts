import * as React from 'react';
import { AppShell, Container, Text, Group, Title } from '@mantine/core';

export const Footer = () => {
  return (
    <AppShell.Footer
      id="support"
      style={{
        position: 'static',
        backgroundColor: '#222027',
        height: '100%'
      }}
    >
      <Container size="xl">
        <Group
          justify="center"
          pt={50}
          pb={100}
          style={{ flexDirection: 'column' }}
        >
          <Title fz={50} c={'#fff'}>
            FOLLOW US
          </Title>
          <Text ta={'center'} w={350} c={'#fff'}>
            on all Social Media platforms and follow the path to the launch of
            Houts!
          </Text>
          <Text fz={16} c={'#fff'}>
            © Houts | Impressum
          </Text>
        </Group>
      </Container>
    </AppShell.Footer>
  );
};
