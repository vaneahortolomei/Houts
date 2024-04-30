import { Container, Text, Title, Group, Box, Image } from '@mantine/core';
import React from 'react';
import styles from './TopSection.module.scss';
import { useTranslation } from 'react-i18next';
import ImageReact from '@/assets/Bag_and_apples.png';

export const TopSection = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.top__section}>
      <Container size="xl">
        <Group justify="center" gap="xs" pt={100}>
          <Text fz={32} w={'100%'} className={styles.top__section_title}>
            {t('lang.title')}
          </Text>
          <Title size={70} className={styles.top__section_title2} order={1}>
            {t('lang.yourLifestyle')}
            <Text span inherit className={styles.top__section_word}>
              {t('lang.limitless')}
            </Text>
          </Title>
        </Group>
        <Box className={styles.top__section_img_wrapper}>
          <Image
            className={styles.top__section_img}
            radius="md"
            fit="contain"
            src={ImageReact}
          />
        </Box>
      </Container>
    </section>
  );
};
