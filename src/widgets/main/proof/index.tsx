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

export const SocialProof = () => {
  const isResponsive = useIsResponsive(1024);

  return (
    <>
      <section id="social-proof" className={styles.text}>
        <Container size="xl">
          <Group justify="center" className={styles.text__group}>
            <Title size="35px" fw={400} ta={'center'}>
              SOCIAL PROOF
            </Title>
            <Text className={styles.text__description} ta="center">
              Showcased at prestigious events like ILM Offenbach and
              Thincubator, our 2-in-1 bag has garnered acclaim for its
              innovative design and versatility. It has received positive
              feedback from both industry experts and consumers, establishing
              itself as a standout product. These showcases have significantly
              enhanced its credibility and appeal in the competitive fashion and
              accessory market, making it a favored choice among discerning
              customers looking for both style and functionality.
            </Text>
          </Group>
        </Container>
      </section>
      <section className={styles.grid}>
        <Container size="xl">
          <Grid>
            <Grid.Col span={isResponsive ? 12 : 5.5}>
              <Group
                justify={isResponsive ? 'center' : 'left'}
                className={styles.grid__group}
              >
                <Image
                  className={styles.grid__img}
                  src={ThincubatorOne}
                  h={'auto'}
                />
              </Group>
            </Grid.Col>
            <Grid.Col
              span={isResponsive ? 12 : 6.5}
              className={styles.grid__col}
              pl={isResponsive ? 0 : 100}
              mb={50}
            >
              <Group
                justify={isResponsive ? 'center' : 'left'}
                className={styles.grid__groupText}
              >
                <Title c={'#A74127'} fz={20}>
                  ILM OFFENBACH 2024
                </Title>
                <Text
                  w={isResponsive ? '100%' : 470}
                  fz={16}
                  ta={isResponsive ? 'center' : 'left'}
                >
                  We took our bite from ILM Offenbach. It was a huge deal for
                  us! We got to show off our vegan apple leather bags for the
                  first time, and honestly, we're still riding that high.{' '}
                </Text>
                <Anchor
                  className={styles.grid__link}
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7162732165498159104"
                  underline="never"
                  target="_blank"
                  fw={600}
                >
                  {' '}
                  MORE ABOUT
                </Anchor>
              </Group>
            </Grid.Col>
            {isResponsive && (
              <Grid.Col span={isResponsive ? 12 : 5.5}>
                <Group
                  justify={isResponsive ? 'center' : 'left'}
                  className={styles.grid__group}
                >
                  <Image
                    className={styles.grid__img}
                    src={ThincubatorTwo}
                    h={'auto'}
                  />
                </Group>
              </Grid.Col>
            )}
            <Grid.Col
              span={isResponsive ? 12 : 6.5}
              className={styles.grid__col}
              pr={isResponsive ? 0 : 100}
            >
              <Group
                className={styles.grid__groupText_bottom}
                justify={isResponsive ? 'center' : 'right'}
                align="end"
                flex={isResponsive ? '0 0 100%' : 1}
              >
                <Title c={'#A74127'} fz={20}>
                  THINCUBATOR 2024
                </Title>
                <Text
                  w={isResponsive ? '100%' : 420}
                  fz={16}
                  ta={isResponsive ? 'center' : 'right'}
                >
                  Being a part of thincubator by thinc! was an incredible
                  experience! Over two weeks, alongside 40 other young startup
                  enthusiasts, we dedicated ourselves to our projects.
                </Text>
                <Anchor
                  className={styles.grid__link}
                  href="https://www.linkedin.com/posts/plecan-alexandru_thinc-houts-veganbags-activity-7179439690796683264-qKoK?utm_source=share&utm_medium=member_desktop"
                  underline="never"
                  target="_blank"
                  fw={600}
                >
                  MORE ABOUT
                </Anchor>
              </Group>
            </Grid.Col>
            {!isResponsive && (
              <Grid.Col span={isResponsive ? 12 : 5.5}>
                <Group
                  justify={isResponsive ? 'center' : 'left'}
                  className={styles.grid__group}
                >
                  <Image
                    className={styles.grid__img}
                    src={ThincubatorTwo}
                    h={'auto'}
                  />
                </Group>
              </Grid.Col>
            )}
          </Grid>
        </Container>
      </section>
    </>
  );
};
