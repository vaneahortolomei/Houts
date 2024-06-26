import React from 'react';
import { Group, Title, Text, Box, Image, Anchor } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

export const Reviews = () => {
  const data = [
    {
      image:
        'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      text: '“ The most amazing modular Bag i’ve ever seen “',
      title: 'DR. MAXIMILIAN BEICHERT',
      anchor: 'DR. MAXIMILIAN BEICHERT'
    },
    {
      image:
        'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      text: '“ The most amazing modular Bag i’ve ever seen “',
      title: 'DR. MAXIMILIAN BEICHERT',
      anchor: 'DR. MAXIMILIAN BEICHERT'
    },
    {
      image:
        'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      text: '“ The most amazing modular Bag i’ve ever seen “',
      title: 'DR. MAXIMILIAN BEICHERT',
      anchor: 'DR. MAXIMILIAN BEICHERT'
    },
    {
      image:
        'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      text: '“ The most amazing modular Bag i’ve ever seen “',
      title: 'DR. MAXIMILIAN BEICHERT',
      anchor: 'DR. MAXIMILIAN BEICHERT'
    },
    {
      image:
        'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      text: '“ The most amazing modular Bag i’ve ever seen “',
      title: 'DR. MAXIMILIAN BEICHERT',
      anchor: 'DR. MAXIMILIAN BEICHERT'
    },
    {
      image:
        'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      text: '“ The most amazing modular Bag i’ve ever seen “',
      title: 'DR. MAXIMILIAN BEICHERT',
      anchor: 'DR. MAXIMILIAN BEICHERT'
    },
    {
      image:
        'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      text: '“ The most amazing modular Bag i’ve ever seen “',
      title: 'DR. MAXIMILIAN BEICHERT',
      anchor: 'DR. MAXIMILIAN BEICHERT'
    },
    {
      image:
        'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      text: '“ The most amazing modular Bag i’ve ever seen “',
      title: 'DR. MAXIMILIAN BEICHERT',
      anchor: 'DR. MAXIMILIAN BEICHERT'
    },
    {
      image:
        'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      text: '“ The most amazing modular Bag i’ve ever seen “',
      title: 'DR. MAXIMILIAN BEICHERT',
      anchor: 'DR. MAXIMILIAN BEICHERT'
    },
    {
      image:
        'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      text: '“ The most amazing modular Bag i’ve ever seen “',
      title: 'DR. MAXIMILIAN BEICHERT',
      anchor: 'DR. MAXIMILIAN BEICHERT'
    }
  ];

  return (
    <section id="reviews">
      <Group justify="center" mt={100} mb={50}>
        <Title size="50px">
          OUR TESTER{' '}
          <Text span inherit c={'#A74127'}>
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
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  flexDirection: 'column'
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  w={108}
                  h={108}
                  style={{ borderRadius: '50%', border: '5px solid #fff' }}
                />
                <Text
                  c={'#fff'}
                  fz={16}
                  ta={'center'}
                  p={'0 30px'}
                  style={{ lineHeight: 1.2 }}
                >
                  {item.text}
                </Text>
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
