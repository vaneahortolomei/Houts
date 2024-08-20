import React from 'react';
import {
  Container,
  Text,
  Group,
  Title,
  Box,
  Image,
  SimpleGrid,
  Flex,
  BackgroundImage
} from '@mantine/core';
import styles from '@/widgets/main/works/Works.module.scss';
import IconWorks1 from '@/assets/works/Icon-1.svg';
import IconWorks2 from '@/assets/works/Icon-2.svg';
import IconWorks3 from '@/assets/works/Icon-3.svg';
import IconWorks4 from '@/assets/works/Icon-4.svg';
import IconWorks5 from '@/assets/works/Icon-5.svg';
import Leather from '@/assets/Leather.png';
import { useIsResponsive } from '@/hooks/use-is-responsive';
import FadeInSection from '@/features/components/FadeInSection';

export const Works = () => {
  const isResponsive = useIsResponsive(1024);

  const lineItems = [
    {
      id: 1,
      img: IconWorks1,
      title: 'APPLE LEATHER? HOW IT WORKS?',
      text: 'Our bags, crafted from USDA-certified vegan ,,apple" leather using remnants from juice production, exemplify your commitment to circular fashion, seam­lessly blending sustainability with timeless elegance.'
    },
    {
      id: 2,
      img: IconWorks2,
      title: 'IT ALL STARTED WITH AN APPLE',
      text: 'The “vegan” leather we use in our bags was once an apple growing on a tree'
    },
    {
      id: 3,
      img: IconWorks3,
      title: 'JUICE PRODUCTION',
      text: 'The fruit is not directly used in the production of the leather like material. The apples come mostly from the production of apple juice'
    },
    {
      id: 4,
      img: IconWorks4,
      title: 'APPLE RESIDUAL',
      text: 'We take this leftover apple pulp and turn it into a durable, eco-friendly material that looks and feels like leather.'
    },
    {
      id: 5,
      img: IconWorks5,
      title: 'UPCYCLED ECOLOGICAL BAGS',
      text: 'Here is the start your commitment to circular fashion, seamlessly blending sustainability with timeless elegance.'
    }
  ];

  return (
    <section id="works" className={styles.text}>
      <Box mx="auto">
        <BackgroundImage
          h={455}
          src={Leather}
          className={styles.text__background}
        >
          <Container size="xl">
            <FadeInSection>
              <Group justify="center" className={styles.text__group}>
                <Title
                  className={styles.text__title}
                  ta={'center'}
                  fw={400}
                  c={'#fff'}
                >
                  APPLE LEATHER? HOW IT WORKS?
                </Title>
                <Text
                  className={styles.text__description}
                  ta="center"
                  c={'#fff'}
                >
                  Our bags, crafted from USDA-certified vegan ,,apple" leather
                  using remnants from juice production, exemplify your
                  commitment to circular fashion, seam­lessly blending
                  sustainability with timeless elegance.
                </Text>
              </Group>
            </FadeInSection>
          </Container>
        </BackgroundImage>
      </Box>
      <SimpleGrid
        cols={isResponsive ? 1 : 5}
        style={{ backgroundColor: '#fff' }}
        spacing={0}
        className={styles.grid}
      >
        {lineItems.map((item) => (
          <Flex className={styles.grid__item} key={item.id}>
            <Box className={styles.flexWithLine}>
              <Image
                className={styles.iconWrapper}
                src={item.img}
                w={isResponsive ? 58 : 117}
                h={isResponsive ? 58 : 117}
              />
            </Box>
            <Box className={styles.grid__textWrapper}>
              <FadeInSection>
                <Title
                  className={styles.grid__title}
                  c={'#A74127'}
                  fw={300}
                  fz={isResponsive ? 18 : 20}
                  mb={20}
                  mt={20}
                >
                  {item.title}
                </Title>
                <Text className={styles.grid__text}>{item.text}</Text>
              </FadeInSection>
            </Box>
          </Flex>
        ))}
      </SimpleGrid>
    </section>
  );
};
