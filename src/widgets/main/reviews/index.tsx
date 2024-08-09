import React from 'react';
import { Group, Title, Text, Box, Image, Anchor } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import Alex from '@/assets/reviews/Alex.png';
import David from '@/assets/reviews/David.png';
import John from '@/assets/reviews/John.png';
import Max from '@/assets/reviews/Maximilian.png';
import Neeraj from '@/assets/reviews/Neeraj.png';
import Tudor from '@/assets/reviews/Tudor.png';

export const Reviews = () => {
  const data = [
    {
      image: Alex,
      text: '“I really like the medullary part of the bag “',
      title: 'ALEX BAUER',
      anchor: 'https://www.linkedin.com/in/alexander-bauer-538b87138/'
    },
    {
      image: David,
      text: '“Business casual and modern, i like it “',
      title: 'DAVID STRITTMATTER',
      anchor: 'https://www.linkedin.com/in/david-strittmatter/'
    },
    {
      image: Max,
      text: '“ One of the most amazing modular Bag i’ve  ever seen “',
      title: 'DR. MAXIMILIAN BEICHERT',
      anchor: 'https://www.linkedin.com/in/maximilian-beichert/'
    },
    {
      image: John,
      text: '“ Travel and work in one bag, exactly what i was looking for. Modern Design and sustainable”',
      title: 'JOHN ACHIM HOLZHAUER',
      anchor: 'https://www.linkedin.com/in/john-achim-holzhauer/'
    },
    {
      image: Neeraj,
      text: '“ Very modern Design and useful use cases. I’ve been already and must to say that for an apple leather bag  it looks pretty good, “',
      title: 'NEERAJ KUMAR',
      anchor: 'https://www.linkedin.com/in/neeraj-kumar-11852719/'
    },
    {
      image: Tudor,
      text: '“ Never knew about apple vegan leathe and  have to say i got really impressed, well done! “',
      title: 'TUDOR BAIDOC',
      anchor: 'https://www.linkedin.com/in/baidoc/'
    },
    {
      image: Alex,
      text: '“I really like the medullary part of the bag “',
      title: 'ALEX BAUER',
      anchor: 'https://www.linkedin.com/in/alexander-bauer-538b87138/'
    },
    {
      image: David,
      text: '“Business casual and modern, i like it “',
      title: 'DAVID STRITTMATTER',
      anchor: 'https://www.linkedin.com/in/david-strittmatter/'
    },
    {
      image: Max,
      text: '“ One of the most amazing modular Bag i’ve  ever seen “',
      title: 'DR. MAXIMILIAN BEICHERT',
      anchor: 'https://www.linkedin.com/in/maximilian-beichert/'
    },
    {
      image: John,
      text: '“ Travel and work in one bag, exactly what i was looking for. Modern Design and sustainable”',
      title: 'JOHN ACHIM HOLZHAUER',
      anchor: 'https://www.linkedin.com/in/john-achim-holzhauer/'
    },
    {
      image: Neeraj,
      text: '“ Very modern Design and useful use cases. I’ve been already and must to say that for an apple leather bag  it looks pretty good, “',
      title: 'NEERAJ KUMAR',
      anchor: 'https://www.linkedin.com/in/neeraj-kumar-11852719/'
    },
    {
      image: Tudor,
      text: '“ Never knew about apple vegan leathe and  have to say i got really impressed, well done! “',
      title: 'TUDOR BAIDOC',
      anchor: 'https://www.linkedin.com/in/baidoc/'
    },
    {
      image: Alex,
      text: '“I really like the medullary part of the bag “',
      title: 'ALEX BAUER',
      anchor: 'https://www.linkedin.com/in/alexander-bauer-538b87138/'
    }
  ];

  return (
    <section id="reviews">
      <Group justify="center" mt={100} mb={50}>
        <Title size="35px" fw={400}>
          OUR TESTER{' '}
          <Text fw={400} span inherit c={'#A74127'}>
            REVIEWS
          </Text>
        </Title>
      </Group>
      <Box>
        <Carousel
          mb={130}
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
                    style={{ borderRadius: '50%', border: '5px solid #fff' }}
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
                      color: '#A74127'
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
    </section>
  );
};
