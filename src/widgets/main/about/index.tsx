import React from 'react';
import { Container, Text, Title, Group, Box } from '@mantine/core';
import styles from './About.module.scss';
import ImageWithDots from '@/features/components/AnimatedCircle';
import Bags from '@/assets/Bags.png';

export const About = () => {
  const descriptions = [
    {
      title: 'Luggage Pass-Through',
      description:
        'The back of the bag has two large pockets that allow a lot of space for various things including luggage pass-through strap.'
    },
    {
      title: 'Luggage 2',
      description: 'The back of the bag has two.'
    },
    {
      title: 'Luggage 3',
      description: 'The back eeee'
    },
    {
      title: 'Luggage 4',
      description: 'The back dadadada'
    },
    {
      title: 'Luggage 5',
      description: 'The back yyyyy'
    }
  ];

  const circles = [
    { top: '10%', left: '32%', animationDuration: '2s' },
    { top: '65%', left: '30%', animationDuration: '2.2s' },
    { top: '35%', left: '72%', animationDuration: '3s' },
    { top: '52%', left: '33%', animationDuration: '2.4s' },
    { top: '62%', left: '73%', animationDuration: '2.7s' }
  ];

  const containerStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  };

  const imgStyles: React.CSSProperties = {
    width: '70%',
    height: 'auto'
  };

  const descriptionStyles: React.CSSProperties = {
    flex: '0 1 300px',
    marginRight: '100px',
    marginTop: '120px'
  };

  return (
    <section className={styles.about} id="about">
      <Container size="xl">
        <Group justify="center" className={styles.about__titles}>
          <Title size="50px">ABOUT HOUTS BAG</Title>
          <Box w={510} className={styles.about__text_group}>
            <Text fz={20} fw={500} mb={20} mt={10}>
              Your lifestyle. Limitless
            </Text>
            <Text fz={20} fw={500} mb={30}>
              The versatile vegan Apple Leather bag that goes from a comfortable
              backpack to a handbag that supports your active lifestyle.
            </Text>
          </Box>
          <Text fz={31} c={'#A4A4A4'}>
            BACKSIDE & FRONT
          </Text>
        </Group>
        <Box mt={50} pb={100}>
          <ImageWithDots
            descriptions={descriptions}
            containerStyles={containerStyles}
            descriptionStyles={descriptionStyles}
            imgStyles={imgStyles}
            circles={circles}
            img={Bags}
            imgTitle={'BACKSIDE & FRONT'}
          />
        </Box>
      </Container>
    </section>
  );
};
