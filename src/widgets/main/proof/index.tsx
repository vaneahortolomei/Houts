import React from 'react';
import {
  Container,
  Text,
  Group,
  Title,
  Grid,
  Image,
  Anchor
} from '@mantine/core';
import ThincubatorOne from '@/assets/think.png';
import ThincubatorTwo from '@/assets/think2.png';
import styles from '@/widgets/main/proof/Social.module.scss';
import { useIsResponsive } from '@/hooks/use-is-responsive';
import FadeInSection from '@/features/components/FadeInSection';
import { useTranslation } from 'react-i18next';

export const SocialProof = () => {
  const isResponsive = useIsResponsive(1024);
  const { t } = useTranslation();

  return (
    <>
      <section id="social-proof" className={styles.text}>
        <Container size="xl">
          <FadeInSection>
            <Group justify="center" className={styles.text__group}>
              <Title size="35px" fw={400} ta={'center'}>
                {t('lang.socialProof.title')}
              </Title>
              <Text className={styles.text__description} ta="center">
                {t('lang.socialProof.desc')}
              </Text>
            </Group>
          </FadeInSection>
        </Container>
      </section>
      <section className={styles.grid}>
        <Container size="xl">
          <Grid>
            <Grid.Col span={isResponsive ? 12 : 5.5}>
              <FadeInSection>
                <Group
                  justify={isResponsive ? 'center' : 'left'}
                  className={styles.grid__group}
                >
                  <Image
                    alt={'proof'}
                    className={styles.grid__img}
                    src={ThincubatorOne}
                    h={'auto'}
                  />
                </Group>
              </FadeInSection>
            </Grid.Col>
            <Grid.Col
              span={isResponsive ? 12 : 6.5}
              className={styles.grid__col}
              pl={isResponsive ? 0 : 100}
              mb={50}
            >
              <FadeInSection>
                <Group
                  justify={isResponsive ? 'center' : 'left'}
                  className={styles.grid__groupText}
                >
                  <Title c={'#222027'} fz={20}>
                    {t('lang.socialProof.thincubator.col.title')}
                  </Title>
                  <Text
                    w={isResponsive ? '100%' : 470}
                    fz={16}
                    ta={isResponsive ? 'center' : 'left'}
                  >
                    {t('lang.socialProof.thincubator.col.desc')}
                  </Text>
                  <Anchor
                    className={styles.grid__link}
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7162732165498159104"
                    underline="never"
                    target="_blank"
                    fw={600}
                  >
                    {' '}
                    {t('lang.socialProof.thincubator.col.button')}
                  </Anchor>
                </Group>
              </FadeInSection>
            </Grid.Col>
            {isResponsive && (
              <Grid.Col span={isResponsive ? 12 : 5.5}>
                <FadeInSection>
                  <Group
                    justify={isResponsive ? 'center' : 'left'}
                    className={styles.grid__group}
                  >
                    <Image
                      alt={'proof-2'}
                      className={styles.grid__img}
                      src={ThincubatorTwo}
                      h={'auto'}
                    />
                  </Group>
                </FadeInSection>
              </Grid.Col>
            )}
            <Grid.Col
              span={isResponsive ? 12 : 6.5}
              className={styles.grid__col}
              pr={isResponsive ? 0 : 100}
            >
              <FadeInSection>
                <Group
                  className={styles.grid__groupText_bottom}
                  justify={isResponsive ? 'center' : 'right'}
                  align="end"
                  flex={isResponsive ? '0 0 100%' : 1}
                >
                  <Title c={'#222027'} fz={20}>
                    {t('lang.socialProof.thincubator.col1.title')}
                  </Title>
                  <Text
                    w={isResponsive ? '100%' : 420}
                    fz={16}
                    ta={isResponsive ? 'center' : 'right'}
                  >
                    {t('lang.socialProof.thincubator.col1.desc')}
                  </Text>
                  <Anchor
                    className={styles.grid__link}
                    href="https://www.linkedin.com/posts/plecan-alexandru_thinc-houts-veganbags-activity-7179439690796683264-qKoK?utm_source=share&utm_medium=member_desktop"
                    underline="never"
                    target="_blank"
                    fw={600}
                  >
                    {t('lang.socialProof.thincubator.col1.button')}
                  </Anchor>
                </Group>
              </FadeInSection>
            </Grid.Col>
            {!isResponsive && (
              <Grid.Col span={isResponsive ? 12 : 5.5}>
                <FadeInSection>
                  <Group
                    justify={isResponsive ? 'center' : 'left'}
                    className={styles.grid__group}
                  >
                    <Image
                      alt={'proof-3'}
                      className={styles.grid__img}
                      src={ThincubatorTwo}
                      h={'auto'}
                    />
                  </Group>
                </FadeInSection>
              </Grid.Col>
            )}
          </Grid>
        </Container>
      </section>
    </>
  );
};
