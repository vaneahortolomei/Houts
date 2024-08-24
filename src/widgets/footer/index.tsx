import * as React from 'react';
import {
  AppShell,
  Container,
  Text,
  Group,
  Title,
  Anchor,
  Image,
  Flex
} from '@mantine/core';
import Facebook from '@/assets/footer/Facebook.svg';
import Instagram from '@/assets/footer/Instagram.svg';
import Linkedin from '@/assets/footer/Linkedin.svg';
import { useIsResponsive } from '@/hooks/use-is-responsive';

export const Footer = () => {
  const isResponsive = useIsResponsive(1024);

  const socialLinks = [
    {
      id: 1,
      title: 'Facebook',
      src: Facebook,
      href: '#'
    },
    {
      id: 2,
      title: 'Instagram',
      src: Instagram,
      href: '#'
    },
    {
      id: 3,
      title: 'Linkedin',
      src: Linkedin,
      href: 'https://www.linkedin.com/company/101162389/admin/dashboard/'
    }
  ];

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
          <Title fz={isResponsive ? 27 : 50} c={'#fff'} fw={400}>
            FOLLOW US
          </Title>
          <Text ta={'center'} w={isResponsive ? 'auto' : 350} c={'#fff'}>
            on all Social Media platforms and follow the path to the launch of
            Houts!
          </Text>
          <Flex gap="lg">
            {socialLinks.map((item) => (
              <Anchor href={item.href} target="_blank" key={item.id}>
                <Image src={item.src} w={46} h={46} title={item.title} />
              </Anchor>
            ))}
          </Flex>
          <Text fz={16} c={'#fff'}>
            © Houts | Impressum
          </Text>
        </Group>
      </Container>
    </AppShell.Footer>
  );
};
