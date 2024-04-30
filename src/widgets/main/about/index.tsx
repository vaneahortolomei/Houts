import React from 'react';
import { Container, Text, Title, Group, Box, Image, Flex } from '@mantine/core';
import ImageReact from '@/assets/react.svg';
import styles from './About.module.scss';

export const About = () => {
  return (
    <section className={styles.about} id="about">
      <Container size="xl">
        <Group justify="center" className={styles.about__titles}>
          <Title size="32px">ABOUT HOUTS BAG</Title>
          <Text>
            The versatile Apple Leather bag that goes from a handbag to a
            comfortable backpack & supports your active lifestyle.
          </Text>
          <Text>BACKSIDE && FRONT</Text>
        </Group>
        <Flex>
          <Box>
            <Text>
              <Title>TOP POCKET</Title>
              The back of the bag has two large pockets that allow a lot of
              space for various things including Bag straps
            </Text>
          </Box>
          <Image src={ImageReact} />
        </Flex>
      </Container>
    </section>
  );
};
