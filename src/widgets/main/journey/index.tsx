import React from 'react';
import { Container, Text, Group, Title, Box, Image } from '@mantine/core';
import styles from '@/widgets/main/journey/Journey.module.scss';

import IconJourney1 from '@/assets/journey/journey-1.svg';
import IconJourney2 from '@/assets/journey/journey-2.svg';
import IconJourney3 from '@/assets/journey/journey-3.svg';
import IconJourney4 from '@/assets/journey/journey-4.svg';

import Timeline1 from '@/assets/journey/timeline1.jpg';
import Timeline2 from '@/assets/journey/timeline2.jpg';
import Timeline3 from '@/assets/journey/timeline3.jpg';
import Timeline4 from '@/assets/journey/timeline4.jpg';
import Timeline5 from '@/assets/journey/timeline5.jpg';
import Timeline6 from '@/assets/journey/timeline6.jpg';
import Timeline7 from '@/assets/journey/timeline7.jpg';
import Timeline8 from '@/assets/journey/timeline8.jpg';

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

  const imgData = [
    {
      id: 0,
      img: Timeline5,
      img2: Timeline2
    },
    {
      id: 1,
      img: Timeline1,
      img2: Timeline6
    },
    {
      id: 2,
      img: Timeline7,
      img2: Timeline8
    },
    {
      id: 3,
      img: Timeline3,
      img2: Timeline4
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
      <section className={styles.bg}>
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
                  <>
                    <Box className={styles.timeline_icon}>
                      <Image src={item.icon} w={50} h={50} alt={'icon'} />
                    </Box>
                    <FadeInSection>
                      <div style={{ display: 'flex', gap: '120px' }}>
                        <Group
                          className={`${styles.timeline_content}
                             ${!isResponsive && item.flag === 'left' ? styles.left : styles.right} 
                             ${!isResponsive && item.flag === 'right' ? styles.order : ''}`}
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
                        {!isResponsive && (
                          <Group className={styles.timeline__photos}>
                            <Box className={styles.timeline__photos_item}>
                              <Image src={imgData[index].img} alt={'img'} />
                            </Box>
                            <Box className={styles.timeline__photos_item}>
                              <Image src={imgData[index].img2} alt={'img'} />
                            </Box>
                          </Group>
                        )}
                      </div>
                    </FadeInSection>
                  </>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </section>
    </>
  );
};
