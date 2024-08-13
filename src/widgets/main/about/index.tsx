import React from 'react';
import { Container, Text, Title, Group, Box } from '@mantine/core';
import styles from './About.module.scss';
import ImageWithDots from '@/features/components/AnimatedCircle';
import Bags from '@/assets/Bags.png';
import { useIsResponsive } from '@/hooks/use-is-responsive';

export const About = () => {
  const isResponsive = useIsResponsive(1024);
  const isResponsive1300 = useIsResponsive(1300);

  const descriptions = [
    {
      title: 'BACKSIDE: TOP POCKET',
      description:
        "The top pocket is ideal for items you need quick access to, such as your phone, passport, or keys. Its convenient location and spacious interior make it perfect for storing essentials on the go. The pocket's secure closure keeps your belongings safe, while the sleek design maintains the bag's sophisticated appearance."
    },
    {
      title: 'MINIMALIST DESIGN',
      description:
        "Embrace the elegance of simplicity with this bag's minimalist design. Clean lines, subtle details, and a focus on functionality make this bag a perfect choice for those who appreciate understated sophistication. The minimalist approach ensures that the bag remains timeless and versatile, suitable for any occasion."
    },
    {
      title: 'LUGGAGE STRAP',
      description:
        'Our bag includes a durable luggage strap, making it easy to secure to your rolling suitcase. This convenient feature boosts mobility and simplifies travel, ensuring a seamless journey wherever you go.'
    },
    {
      title: 'BACKSIDE: BOTTOM POCKET',
      description:
        'The bottom pocket provides additional storage for your daily necessities. Whether you need to carry cables, a small notebook, or personal items, this pocket offers ample space and easy accessibility. The durable zipper ensures your items stay securely in place, making it a practical addition to this stylish bag.'
    },
    {
      title: 'FRONTSIDE: POCKET',
      description:
        "The frontside pocket is a versatile compartment that offers extra room for your belongings. It's perfect for storing items that you need to access frequently throughout the day for example Bag Straps. The pocket's streamlined design seamlessly integrates with the bag's overall aesthetic, adding both functionality and style."
    }
  ];

  const circles = [
    {
      top: '11%',
      left: '1%',
      animationDuration: '2s'
    },
    {
      top: '52%',
      left: '4%',
      animationDuration: '2.4s'
    },
    {
      top: '65%',
      left: '0%',
      animationDuration: '2.2s'
    },
    {
      top: '35%',
      left: '60%',
      animationDuration: '3s'
    },
    {
      top: '62%',
      left: '61%',
      animationDuration: '2.7s'
    }
  ];

  const containerStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: isResponsive ? 'column' : 'row',
    alignItems: isResponsive1300 ? 'center' : 'flex-start',
    justifyContent: 'space-between',
    gap: isResponsive ? '50px' : '0'
  };

  const imgStyles: React.CSSProperties = {
    position: 'relative',
    width: isResponsive ? '100%' : '100%',
    height: 'auto'
  };

  const descriptionStyles: React.CSSProperties = {
    flex: isResponsive ? '' : '0 1 300px',
    marginRight: isResponsive1300 ? (isResponsive ? '' : '50px') : '100px',
    marginTop: isResponsive1300 ? '0' : '120px',
    order: isResponsive ? 1 : 0,
    marginBottom: isResponsive ? '40px' : ''
  };

  const titleTextStyles: React.CSSProperties = {
    fontSize: isResponsive1300 ? '20px' : '25px'
  };

  const descTextStyles: React.CSSProperties = {
    fontSize: isResponsive1300 ? '16px' : '20px'
  };

  return (
    <section className={styles.about} id="about">
      <Container size="xl">
        <Group justify="center" className={styles.about__titles}>
          <Title fw={400} className={styles.about__title}>
            ABOUT HOUTS BAG
          </Title>
          <Box className={styles.about__text_group}>
            <Text fz={20} fw={500} mb={20} mt={10}>
              Your lifestyle. Limitless
            </Text>
            <Text
              fz={20}
              fw={500}
              mb={30}
              className={styles.about__description}
            >
              The versatile vegan Apple Leather bag that goes from a comfortable
              backpack to a handbag that supports your active lifestyle.
            </Text>
          </Box>
          <Text fz={31} c={'#A4A4A4'}>
            BACKSIDE & FRONT
          </Text>
        </Group>
        <Box mt={50}>
          <ImageWithDots
            descriptions={descriptions}
            containerStyles={containerStyles}
            descriptionStyles={descriptionStyles}
            imgStyles={imgStyles}
            titleTextStyles={titleTextStyles}
            descTextStyles={descTextStyles}
            circles={circles}
            img={Bags}
            imgTitle={'BACKSIDE & FRONT'}
          />
        </Box>
      </Container>
    </section>
  );
};
