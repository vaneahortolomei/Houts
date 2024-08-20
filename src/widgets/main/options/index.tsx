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

export const BagOptions = () => {
  const isResponsive = useIsResponsive(1024);

  return (
    <section id="options" className={styles.options}>
      <Container size="xl">
        <FadeInSection>
          <Grid
            gutter="xl"
            justify="space-between"
            align="baseline"
            className={styles.options__group}
          >
            <Grid.Col span={isResponsive ? 12 : 4}>
              <Group justify={'center'} className={styles.options__col}>
                <Flex align="center" gap={10} className={styles.options__head}>
                  <Image src={First} w={45} h={45} />
                  <Title fz={20}>APPLE LEATHER</Title>
                </Flex>
                <Text className={styles.options__text} ta="center">
                  Our bags are crafted from eco-friendly apple leather, offering
                  durability and a luxurious finish while supporting
                  sustainability in fashion. Stylish and versatile, they are
                  perfect for conscious consumers seeking responsible fashion
                  choices without compromising on quality or aesthetics.
                </Text>
              </Group>
            </Grid.Col>
            <Grid.Col span={isResponsive ? 12 : 4}>
              <Group justify={'center'} className={styles.options__col}>
                <Flex
                  align="center"
                  gap={10}
                  w={280}
                  className={styles.options__head}
                >
                  <Image src={Second} w={45} h={45} />
                  <Title fz={20} style={{ lineHeight: '1.1' }}>
                    BAG AS YOUR PERSONAL STATEMENT
                  </Title>
                </Flex>
                <Text className={styles.options__text} ta="center">
                  A bag that represents you: Designed to be more than just a
                  carrier for your essentials, this bag serves as a personal
                  statement, reflecting your unique style and identity. Perfect
                  for making a lasting impression wherever you go.
                </Text>
              </Group>
            </Grid.Col>
            <Grid.Col span={isResponsive ? 12 : 4}>
              <Group justify={'center'} className={styles.options__col}>
                <Flex align="center" gap={10} className={styles.options__head}>
                  <Image src={Third} w={45} h={45} />
                  <Title fz={20}>TWO BAGS IN ONE</Title>
                </Flex>
                <Text className={styles.options__text} ta="center">
                  Design of the 2-in-1 bag enables swift transformation from a
                  shoulder bag to a backpack with ease. This adaptability makes
                  it an ideal choice for those who value flexibility and
                  functionality in their everyday carry, ensuring it meets a
                  range of preferences and situations with ease.
                </Text>
              </Group>
            </Grid.Col>
          </Grid>
        </FadeInSection>
      </Container>
    </section>
  );
};
