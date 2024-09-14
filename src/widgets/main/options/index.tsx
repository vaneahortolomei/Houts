import React from 'react';
import {
  Grid,
  Container,
  Text,
  Title,
  Group,
  Image,
  Flex
} from '@mantine/core';
import First from '@/assets/1.svg';
import Second from '@/assets/2.svg';
import Third from '@/assets/3.svg';
import styles from './Options.module.scss';
import { useIsResponsive } from '@/hooks/use-is-responsive';
import FadeInSection from '@/features/components/FadeInSection';
import { useTranslation } from 'react-i18next';

export const BagOptions = () => {
  const isResponsive = useIsResponsive(1024);
  const { t } = useTranslation();

  return (
    <section id="options" className={styles.options}>
      <Container size="xl">
        <Grid
          gutter="xl"
          justify="space-between"
          align="baseline"
          className={styles.options__group}
        >
          <Grid.Col span={isResponsive ? 12 : 4}>
            <FadeInSection>
              <Group justify={'center'} className={styles.options__col}>
                <Flex align="center" gap={10} className={styles.options__head}>
                  <Image src={First} w={45} h={45} alt={'icon-one'} />
                  <Title fz={20}>{t('lang.options.title')}</Title>
                </Flex>
                <Text className={styles.options__text} ta="center">
                  {t('lang.options.desc')}
                </Text>
              </Group>
            </FadeInSection>
          </Grid.Col>
          <Grid.Col span={isResponsive ? 12 : 4}>
            <FadeInSection>
              <Group justify={'center'} className={styles.options__col}>
                <Flex
                  align="center"
                  gap={10}
                  w={280}
                  className={styles.options__head}
                >
                  <Image src={Second} w={45} h={45} alt={'icon-two'} />
                  <Title fz={20} style={{ lineHeight: '1.1' }}>
                    {t('lang.options.title1')}
                  </Title>
                </Flex>
                <Text className={styles.options__text} ta="center">
                  {t('lang.options.desc1')}
                </Text>
              </Group>
            </FadeInSection>
          </Grid.Col>
          <Grid.Col span={isResponsive ? 12 : 4}>
            <FadeInSection>
              <Group justify={'center'} className={styles.options__col}>
                <Flex align="center" gap={10} className={styles.options__head}>
                  <Image src={Third} w={45} h={45} alt={'icon-third'} />
                  <Title fz={20}>{t('lang.options.title2')}</Title>
                </Flex>
                <Text className={styles.options__text} ta="center">
                  {t('lang.options.desc2')}
                </Text>
              </Group>
            </FadeInSection>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
};
