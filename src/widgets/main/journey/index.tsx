import React from 'react';
import { Container, Text, Group, Title, Divider, Flex } from '@mantine/core';

export const Journey = () => {
  return (
    <>
      <section id="journey" style={{ backgroundColor: '#F6F4F1' }}>
        <Container size="xl">
          <Group
            justify="center"
            pt={150}
            pb={100}
            style={{ flexDirection: 'column' }}
          >
            <Title size="50px" ta={'center'}>
              OUR STORY & JOURNEY
            </Title>
            <Text ta="center" w={800}>
              We are the founders of Houts, 2 energetic young people passionate
              about the idea of combining a lifestyle and sustainability in one
              punch. Be part of our community and make your lifestyle limitless.
            </Text>
          </Group>
        </Container>
      </section>
      <section style={{ backgroundColor: '#fff' }}>
        <Container size="xl">
          <Flex pb={200} justify="center">
            <Divider
              labelPosition="center"
              size="xs"
              orientation="vertical"
              h={1000}
              color={'#A74127'}
            />
          </Flex>
        </Container>
      </section>
    </>
  );
};
