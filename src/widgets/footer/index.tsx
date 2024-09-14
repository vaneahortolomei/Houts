import * as React from 'react';
import {
  AppShell,
  Container,
  Text,
  Group,
  Title,
  Anchor,
  Image,
  Flex,
  Box
} from '@mantine/core';
import Instagram from '@/assets/footer/Instagram.svg';
import Linkedin from '@/assets/footer/Linkedin.svg';
import DesktopBag from '@/assets/top/top.webp';
import DesktopBagPng from '@/assets/top/top.png';
import { useIsResponsive } from '@/hooks/use-is-responsive';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const isResponsive = useIsResponsive(1024);
  const { t } = useTranslation();

  const socialLinks = [
    {
      id: 2,
      title: 'Instagram',
      src: Instagram,
      href: 'https://www.instagram.com/houts_bag?igsh=cGs1dGhlaTdmazVt'
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
        position: 'relative',
        backgroundColor: '#222027',
        height: '100%',
        zIndex: 10
      }}
    >
      <Container size="xl">
        <Group justify="center" pt={50} style={{ flexDirection: 'column' }}>
          <Title fz={isResponsive ? 27 : 50} c={'#fff'} fw={400}>
            {t('lang.footer.title')}
          </Title>
          <Text ta={'center'} w={isResponsive ? 'auto' : 350} c={'#fff'}>
            {t('lang.footer.desc')}
          </Text>
          <Flex gap="lg">
            {socialLinks.map((item) => (
              <Anchor href={item.href} target="_blank" key={item.id}>
                <Image
                  src={item.src}
                  w={46}
                  h={46}
                  title={item.title}
                  alt={'social-links'}
                />
              </Anchor>
            ))}
          </Flex>
          <Group c={'#fff'} gap={10}>
            <Text fz={16}>© Houts</Text> |
            <Anchor fz={16} href="/terms" style={{ color: '#fff' }}>
              {t('lang.footer.links.terms')}
            </Anchor>{' '}
            |
            <Anchor fz={16} href="/policy" style={{ color: '#fff' }}>
              {t('lang.footer.links.policy')}
            </Anchor>
          </Group>
          <Box
            style={{ position: 'relative', maxWidth: '350px', height: 'auto' }}
          >
            <picture>
              <source srcSet={DesktopBag} type="image/webp" />
              <source srcSet={DesktopBagPng} type="image/png" />
              <Image
                maw={350}
                src={DesktopBag}
                style={{ display: 'block' }}
                alt={'footer-bag'}
              />
            </picture>
            <Box
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: '#222027ba',
                zIndex: 1
              }}
            />
          </Box>
        </Group>
      </Container>
      <Text
        c={'#fff'}
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          zIndex: 10
        }}
      >
        Developed by{' '}
        <Anchor
          target="_blank"
          fz={16}
          fw={700}
          href="https://www.linkedin.com/in/ion-hortolomei-56aa921a6/"
          style={{ color: '#5B5A5F' }}
        >
          {' '}
          I.H.
        </Anchor>
      </Text>
    </AppShell.Footer>
  );
};
