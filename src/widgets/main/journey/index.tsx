import React from 'react';
import { Container, Text, Group, Title, Box, Image } from '@mantine/core';
import styles from '@/widgets/main/journey/Journey.module.scss';

import IconJourney1 from '@/assets/journey/journey-1.svg';
import IconJourney2 from '@/assets/journey/journey-2.svg';
import IconJourney3 from '@/assets/journey/journey-3.svg';
import IconJourney4 from '@/assets/journey/journey-4.svg';
import { useIsResponsive } from '@/hooks/use-is-responsive';
import FadeInSection from '@/features/components/FadeInSection';

export const Journey = () => {
  const isResponsive = useIsResponsive(1024);

  const data = [
    {
      icon: IconJourney1,
      year: '2021',
      title: 'FIRST ITERATIONS & SKETCHES',
      desc: 'On an evening walk with a coffee, Alex and I discussed the first ideas and visions of the bag. The first steps were taken in August 2021.',
      flag: 'left'
    },
    {
      icon: IconJourney2,
      year: '2022',
      title: 'FIRST PROTOTYPES',
      desc: 'After a year of work on the project, sketches, market analysis, the search for manufacturers, we started the manufacture of the first prototype.',
      flag: 'right'
    },
    {
      icon: IconJourney3,
      year: '2023',
      title: 'PREPARING THE MARKETING STRATEGY & THE FINAL PROTOTYPE',
      desc:
        "Dozens of prototypes, but finally we reached the end of this chapter. It's time to create a\n" +
        '                    marketing and promotion strategy.',
      flag: 'left'
    },
    {
      icon: IconJourney4,
      year: '2024',
      title: 'CROWDFUNDING CAMPAIGN',
      desc:
        'The last stage was of course the Crowdfunding campaign. It always seemed like a distant point for\n' +
        '                    us, but forget that we also reached the final stage.',
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
                OUR STORY & JOURNEY
              </Title>
              <Text className={styles.text__description} ta="center">
                We are the founders of Houts, 2 energetic young people
                passionate about the idea of combining a lifestyle and
                sustainability in one punch. Be part of our community and make
                your lifestyle limitless.
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
                          c={'#A74127'}
                          fw={400}
                        >
                          {item.year}
                        </Text>
                      </Box>
                      <Box
                        p={isResponsive ? '0 0 20px 0' : '20px 0'}
                        w={isResponsive ? 'auto' : 300}
                      >
                        <Title
                          fz={isResponsive ? 18 : 25}
                          fw={300}
                          mb={10}
                          c={'#A74127'}
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
