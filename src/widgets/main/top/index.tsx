import { Container, Text, Title, Group, Box, Image } from '@mantine/core';
import React from 'react';
import styles from './TopSection.module.scss';
import { useTranslation } from 'react-i18next';
import DesktopBag from '@/assets/top/top.png';
import { useIsResponsive } from '@/hooks/use-is-responsive';
import { mobilePaddingFromHeader } from '@/shared/constants';

export const TopSection = () => {
  const { t } = useTranslation();
  const isResponsive = useIsResponsive(1024);

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
          <Title className={styles.top__section_title2} order={1}>
            {t('lang.top.yourLifestyle')}
            <Text span inherit className={styles.top__section_word}>
              {t('lang.top.limitless')}
            </Text>
          </Title>
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
