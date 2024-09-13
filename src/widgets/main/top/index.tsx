import { Container, Text, Title, Group, Box, Image } from '@mantine/core';
import React from 'react';
import styles from './TopSection.module.scss';
import { useTranslation } from 'react-i18next';
import DesktopBag from '@/assets/top/top.png';
import { useIsResponsive } from '@/hooks/use-is-responsive';
import { mobilePaddingFromHeader } from '@/shared/constants';
import { useTypewriter } from 'react-simple-typewriter';

export const TopSection = () => {
  const { t } = useTranslation();
  const isResponsive = useIsResponsive(1024);

  const [text] = useTypewriter({
    words: ['YOUR LIFESTYLE. LIMITLESS'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 80,
    delaySpeed: 7000
  });

  return (
    <section className={styles.top__section}>
      <Container size="xl">
        <Group
          justify="center"
          gap="xs"
          pt={isResponsive ? mobilePaddingFromHeader + 40 : 100}
        >
          <Text w={'100%'} className={styles.top__section_title}>
            {t('lang.top.title')}
          </Text>
          {isResponsive ? (
            <Title className={styles.top__section_title2} order={1}>
              {t('lang.top.yourLifestyle')}
              <Text span inherit className={styles.top__section_word}>
                {t('lang.top.limitless')}
              </Text>
            </Title>
          ) : (
            <Box h={117}>
              <Title className={styles.top__section_title2} order={1}>
                {text}
              </Title>
            </Box>
          )}
        </Group>
        <Box className={styles.top__section_img_wrapper}>
          <Image
            className={styles.top__section_img}
            radius="md"
            fit="contain"
            src={DesktopBag}
          />
        </Box>
      </Container>
    </section>
  );
};
