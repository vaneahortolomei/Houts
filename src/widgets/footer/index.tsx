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

export const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      title: 'Facebook',
      src: Facebook,
      href: 'https://www.facebook.com'
    },
    {
      id: 2,
      title: 'Instagram',
      src: Instagram,
      href: 'https://www.instagram.com'
    },
    {
      id: 3,
      title: 'Linkedin',
      src: Linkedin,
      href: 'https://www.linkedin.com'
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
          <Title fz={50} c={'#fff'}>
            FOLLOW US
          </Title>
          <Text ta={'center'} w={350} c={'#fff'}>
            on all Social Media platforms and follow the path to the launch of
            Houts!
          </Text>
          <Flex gap="lg">
            {socialLinks.map((item, index) => (
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
