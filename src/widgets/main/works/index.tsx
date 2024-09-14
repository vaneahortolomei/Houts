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
import Leather from '@/assets/works/Leather.jpg';
import { useIsResponsive } from '@/hooks/use-is-responsive';
import FadeInSection from '@/features/components/FadeInSection';
import { useTranslation } from 'react-i18next';

export const Works = () => {
  const isResponsive = useIsResponsive(1024);
  const { t } = useTranslation();

  const lineItems = [
    {
      id: 1,
      img: IconWorks1,
      title: `${t('lang.works.items.item.title')}`,
      text: `${t('lang.works.items.item.desc')}`
    },
    {
      id: 2,
      img: IconWorks2,
      title: `${t('lang.works.items.item1.title')}`,
      text: `${t('lang.works.items.item1.desc')}`
    },
    {
      id: 3,
      img: IconWorks3,
      title: `${t('lang.works.items.item2.title')}`,
      text: `${t('lang.works.items.item2.desc')}`
    },
    {
      id: 4,
      img: IconWorks4,
      title: `${t('lang.works.items.item3.title')}`,
      text: `${t('lang.works.items.item3.desc')}`
    },
    {
      id: 5,
      img: IconWorks5,
      title: `${t('lang.works.items.item4.title')}`,
      text: `${t('lang.works.items.item4.desc')}`
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
                  {t('lang.works.title')}
                </Title>
                <Text
                  className={styles.text__description}
                  ta="center"
                  c={'#fff'}
                >
                  {t('lang.works.desc')}
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
                alt={'icons'}
                className={styles.iconWrapper}
                src={item.img}
                w={isResponsive ? 58 : 75}
                h={isResponsive ? 58 : 75}
              />
            </Box>
            <Box className={styles.grid__textWrapper}>
              <FadeInSection>
                <Box className={styles.grid__innerBlock}>
                  <Title
                    className={styles.grid__title}
                    fw={300}
                    fz={isResponsive ? 18 : 20}
                    mb={20}
                    mt={20}
                  >
                    {item.title}
                  </Title>
                  <Text className={styles.grid__text}>{item.text}</Text>
                </Box>
              </FadeInSection>
            </Box>
          </Flex>
        ))}
      </SimpleGrid>
    </section>
  );
};
