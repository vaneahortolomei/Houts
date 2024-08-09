import React from 'react';
import {
  Grid,
  Container,
  Text,
  Title,
  Group,
  Image,
  Flex
} from '@mantine/core';
import First from '@/assets/1.svg';
import Second from '@/assets/2.svg';
import Third from '@/assets/3.svg';

export const BagOptions = () => {
  return (
    <section id="options" style={{ backgroundColor: '#F6F4F1' }}>
      <Container size="xl">
        <Grid
          p={'100px 0'}
          gutter="xl"
          justify="space-between"
          align="baseline"
        >
          <Grid.Col span={4}>
            <Group justify={'center'}>
              <Flex align="center" gap={10}>
                <Image src={First} w={45} h={45} />
                <Title fz={20}>APPLE LEATHER</Title>
              </Flex>
              <Text w={330} ta="center">
                Our bags are crafted from eco-friendly apple leather, offering
                durability and a luxurious finish while supporting
                sustainability in fashion. Stylish and versatile, they are
                perfect for conscious consumers seeking responsible fashion
                choices without compromising on quality or aesthetics.
              </Text>
            </Group>
          </Grid.Col>
          <Grid.Col span={4}>
            <Group justify={'center'}>
              <Flex align="center" gap={10} w={280}>
                <Image src={Second} w={45} h={45} />
                <Title fz={20} style={{ lineHeight: '1.1' }}>
                  BAG AS YOUR PERSONAL STATEMENT
                </Title>
              </Flex>
              <Text w={330} ta="center">
                A bag that represents you: Designed to be more than just a
                carrier for your essentials, this bag serves as a personal
                statement, reflecting your unique style and identity. Perfect
                for making a lasting impression wherever you go.
              </Text>
            </Group>
          </Grid.Col>
          <Grid.Col span={4}>
            <Group justify={'center'}>
              <Flex align="center" gap={10}>
                <Image src={Third} w={45} h={45} />
                <Title fz={20}>TWO BAGS IN ONE</Title>
              </Flex>
              <Text w={330} ta="center">
                Design of the 2-in-1 bag enables swift transformation from a
                shoulder bag to a backpack with ease. This adaptability makes it
                an ideal choice for those who value flexibility and
                functionality in their everyday carry, ensuring it meets a range
                of preferences and situations with ease.
              </Text>
            </Group>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
};
