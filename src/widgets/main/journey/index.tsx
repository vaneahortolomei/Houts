import React from 'react';
import { Container, Text, Group, Title, Box, Image } from '@mantine/core';
import styles from '@/widgets/main/journey/Journey.module.scss';

import IconJourney1 from '@/assets/journey/journey-1.svg';
import IconJourney2 from '@/assets/journey/journey-2.svg';
import IconJourney3 from '@/assets/journey/journey-3.svg';
import IconJourney4 from '@/assets/journey/journey-4.svg';
import { useIsResponsive } from '@/hooks/use-is-responsive';
import FadeInSection from '@/features/components/FadeInSection';
import { useTranslation } from 'react-i18next';

export const Journey = () => {
  const isResponsive = useIsResponsive(1024);
  const { t } = useTranslation();

  const data = [
    {
      icon: IconJourney1,
      year: '2021',
      title: `${t('lang.journey.timeLine.journey.title')}`,
      desc: `${t('lang.journey.timeLine.journey.desc')}`,
      flag: 'left'
    },
    {
      icon: IconJourney2,
      year: '2022',
      title: `${t('lang.journey.timeLine.journey1.title')}`,
      desc: `${t('lang.journey.timeLine.journey1.desc')}`,
      flag: 'right'
    },
    {
      icon: IconJourney3,
      year: '2023',
      title: `${t('lang.journey.timeLine.journey2.title')}`,
      desc: `${t('lang.journey.timeLine.journey2.desc')}`,
      flag: 'left'
    },
    {
      icon: IconJourney4,
      year: '2024',
      title: `${t('lang.journey.timeLine.journey3.title')}`,
      desc: `${t('lang.journey.timeLine.journey3.desc')}`,
      flag: 'right'
    }
  ];
  return (
    <>
      <section id="journey" className={styles.text}>
        <Container size="xl">
          <FadeInSection>
            <Group justify="center" className={styles.text__group}>
              <Title
                className={styles.text__title}
                size="50px"
                ta={'center'}
                fw={400}
              >
                {t('lang.journey.title')}
              </Title>
              <Text className={styles.text__description} ta="center">
                {t('lang.journey.desc')}
              </Text>
            </Group>
          </FadeInSection>
        </Container>
      </section>
      <section style={{ backgroundColor: '#fff' }}>
        <Container size="xl">
          <Box
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Box className={styles.timeline}>
              {data.map((item, index) => (
                <Box className={styles.timeline_item} key={index}>
                  <Box className={styles.timeline_icon}>
                    <Image src={item.icon} w={50} h={50} />
                  </Box>
                  <FadeInSection>
                    <Group
                      className={`${styles.timeline_content} ${!isResponsive && item.flag === 'left' ? styles.left : styles.right}`}
                    >
                      <Box>
                        <Text
                          className={styles.timeline_year}
                          c={'#222027'}
                          fw={400}
                        >
                          {item.year}
                        </Text>
                      </Box>
                      <Box>
                        <Title
                          fz={isResponsive ? 18 : 25}
                          fw={500}
                          mb={10}
                          c={'#222027'}
                        >
                          {item.title}
                        </Title>
                        <Text>{item.desc}</Text>
                      </Box>
                    </Group>
                  </FadeInSection>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </section>
    </>
  );
};
