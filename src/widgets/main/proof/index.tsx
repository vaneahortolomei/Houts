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

export const SocialProof = () => {
  return (
    <>
      <section id="social-proof" style={{ backgroundColor: '#F6F4F1' }}>
        <Container size="xl">
          <Group
            justify="center"
            pt={150}
            pb={100}
            style={{ flexDirection: 'column' }}
          >
            <Title size="50px" ta={'center'}>
              SOCIAL PROOF
            </Title>
            <Text ta="center" w={800}>
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
      <section style={{ backgroundColor: '#fff' }}>
        <Container size="xl">
          <Grid pt={100} pb={120} className={styles.grid}>
            <Grid.Col span={5.5}>
              <Group justify="center" className={styles.grid__group}>
                <Image
                  className={styles.grid__img}
                  src={ThincubatorOne}
                  w={'100%'}
                  h={'auto'}
                />
                <Anchor
                  className={styles.grid__link}
                  href="https://mantine.dev/"
                  underline="never"
                  target="_blank"
                >
                  {' '}
                  MORE ABOUT
                </Anchor>
              </Group>
            </Grid.Col>
            <Grid.Col span={6.5} className={styles.grid__col} pl={100}>
              <Group justify="left">
                <Title c={'#A74127'} fz={20}>
                  ILM OFFENBACH 2024
                </Title>
                <Text w={470} fz={16} ta={'left'}>
                  We took our bite from ILM Offenbach. It was a huge deal for
                  us! We got to show off our vegan apple leather bags for the
                  first time, and honestly, we're still riding that high.{' '}
                </Text>
              </Group>
            </Grid.Col>
            <Grid.Col span={6.5} className={styles.grid__col} pr={100}>
              <Group justify="right">
                <Title c={'#A74127'} fz={20}>
                  THINCUBATOR 2024
                </Title>
                <Text w={420} fz={16} ta={'right'}>
                  Being a part of thincubator by thinc! was an incredible
                  experience! Over two weeks, alongside 40 other young startup
                  enthusiasts, we dedicated ourselves to our projects.
                </Text>
              </Group>
            </Grid.Col>
            <Grid.Col span={5.5}>
              <Group justify="center" className={styles.grid__group}>
                <Image
                  className={styles.grid__img}
                  src={ThincubatorTwo}
                  w={'100%'}
                  h={'auto'}
                />
                <Anchor
                  className={styles.grid__link}
                  href="https://mantine.dev/"
                  underline="never"
                  target="_blank"
                >
                  MORE ABOUT
                </Anchor>
              </Group>
            </Grid.Col>
          </Grid>
        </Container>
      </section>
    </>
  );
};
