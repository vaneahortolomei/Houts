import React from 'react';
import { Group, Title, Text, Box, Image, Anchor } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import Alex from '@/assets/reviews/Alex.png';
import David from '@/assets/reviews/David.png';
import John from '@/assets/reviews/John.png';
import Max from '@/assets/reviews/Maximilian.png';
import Neeraj from '@/assets/reviews/Neeraj.png';
import Tudor from '@/assets/reviews/Tudor.png';
import styles from './Reviews.module.scss';
import FadeInSection from '@/features/components/FadeInSection';
import { useTranslation } from 'react-i18next';

export const Reviews = () => {
  const { t } = useTranslation();

  const data = [
    {
      image: Alex,
      text: '“ I really like the modular part of the bag and also the sustainability concept. ”',
      title: 'ALEX BAUER',
      anchor: 'https://www.linkedin.com/in/alexander-bauer-538b87138/'
    },
    {
      image: David,
      text: '“Saving 30 minutes every day with a well-designed bag adds up to days of extra productivity as a CEO over the year“',
      title: 'DAVID STRITTMATTER',
      anchor: 'https://www.linkedin.com/in/david-strittmatter/'
    },
    {
      image: Max,
      text: '“ Houts is all about making fashion stylish and sustainable. If you want to make a difference, than this bag is for you.”',
      title: 'DR. MAXIMILIAN BEICHERT',
      anchor: 'https://www.linkedin.com/in/maximilian-beichert/'
    },
    {
      image: John,
      text: '“ Exceptional product design. I love it. ”',
      title: 'JOHN ACHIM HOLZHAUER',
      anchor: 'https://www.linkedin.com/in/john-achim-holzhauer/'
    },
    {
      image: Neeraj,
      text: '“ The perfect bag for all who dare to see big dreams ”',
      title: 'NEERAJ KUMAR',
      anchor: 'https://www.linkedin.com/in/neeraj-kumar-11852719/'
    },
    {
      image: Tudor,
      text: '“ Never knew about apple vegan leather and have to say I’m really impressed. Well done!”',
      title: 'TUDOR BAIDOC',
      anchor: 'https://www.linkedin.com/in/baidoc/'
    },
    {
      image: David,
      text: '“Saving 30 minutes every day with a well-designed bag adds up to days of extra productivity as a CEO over the year“',
      title: 'DAVID STRITTMATTER',
      anchor: 'https://www.linkedin.com/in/david-strittmatter/'
    },
    {
      image: Max,
      text: '“ Houts is all about making fashion stylish and sustainable. If you want to make a difference, than this bag is for you.”',
      title: 'DR. MAXIMILIAN BEICHERT',
      anchor: 'https://www.linkedin.com/in/maximilian-beichert/'
    },
    {
      image: John,
      text: '“ Exceptional product design. I love it. ”',
      title: 'JOHN ACHIM HOLZHAUER',
      anchor: 'https://www.linkedin.com/in/john-achim-holzhauer/'
    },
    {
      image: Neeraj,
      text: '“ The perfect bag for all who dare to see big dreams ”',
      title: 'NEERAJ KUMAR',
      anchor: 'https://www.linkedin.com/in/neeraj-kumar-11852719/'
    },
    {
      image: Tudor,
      text: '“ Never knew about apple vegan leather and have to say I’m really impressed. Well done!”',
      title: 'TUDOR BAIDOC',
      anchor: 'https://www.linkedin.com/in/baidoc/'
    }
  ];

  return (
    <section id="reviews" className={styles.reviews}>
      <Group className={styles.reviews__group}>
        <FadeInSection>
          <Group justify="center" mb={50}>
            <Title size="35px" fw={400} ta={'center'}>
              {t('lang.reviews.title')}
            </Title>
          </Group>
        </FadeInSection>
        <FadeInSection>
          <Box>
            <Carousel
              height={350}
              slideSize="300px"
              slideGap={{ base: 'md' }}
              loop
              dragFree
              align="center"
            >
              {data.map((item, index) => (
                <Carousel.Slide key={index}>
                  <Box
                    style={{
                      backgroundColor: '#222027',
                      height: '100%',
                      borderRadius: '30px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexDirection: 'column',
                      padding: '20px 0'
                    }}
                  >
                    <Group justify="center">
                      <Image
                        src={item.image}
                        alt={item.title}
                        w={108}
                        h={108}
                        mb={10}
                        style={{
                          filter: 'grayscale(75%)',
                          borderRadius: '50%',
                          border: '5px solid #fff'
                        }}
                      />
                      <Text
                        c={'#fff'}
                        fz={15}
                        ta={'center'}
                        p={'0 30px'}
                        style={{ lineHeight: 1.2 }}
                      >
                        {item.text}
                      </Text>
                    </Group>
                    <Anchor
                      href={item.anchor}
                      target="_blank"
                      underline="never"
                      style={{
                        color: '#fff',
                        fontSize: '20px',
                        textAlign: 'center',
                        width: '200px'
                      }}
                      sx={{
                        '&:hover': {
                          color: '#222027'
                        }
                      }}
                    >
                      {item.title}
                    </Anchor>
                  </Box>
                </Carousel.Slide>
              ))}
            </Carousel>
          </Box>
        </FadeInSection>
      </Group>
    </section>
  );
};
