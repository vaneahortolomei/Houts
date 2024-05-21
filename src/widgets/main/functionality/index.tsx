import React from 'react';
import styles from '@/widgets/main/functionality/Functionality.module.scss';
import { Container, Group, Title, Text, Image } from '@mantine/core';
import BackPack from '@/assets/Backpack.png';
import ShoulderBag from '@/assets/Shoulder-bag.png';

export const Functionality = () => {
  return (
    <section className={styles.functionality} id="functionality">
      <Container size="xl">
        <Group justify="center" className={styles.functionality__titles}>
          <Title size="50px">FUNCTIONALITY</Title>
          <Text w={1000} fz={20} fw={500} mb={20} mt={10} ta={'center'}>
            The modular bag 2-in-1 seamlessly transitions between a backpack and
            a shoulder bag, offering unparalleled versatility for dynamic
            lifestyles. Its innovative design allows easy conversion with
            detachable straps and secure compartments, catering to both casual
            and professional needs. This adaptable accessory ensures
            practicality and style, making it ideal for active professionals,
            travelers, and fashion-forward individuals.
          </Text>
          <Title size={'35px'}>
            TWO BAGS IN
            <Text span inherit fz={35} c={'#A74127'}>
              {' '}
              ONE
            </Text>
          </Title>
        </Group>
        <Group
          justify="center"
          gap={0}
          className={styles.functionality__img_container}
        >
          <Image
            className={styles.functionality__img}
            w="49.8%"
            mr={'-1px'}
            fit={'contain'}
            src={BackPack}
          />
          <Image
            className={styles.functionality__img}
            w="50%"
            fit={'contain'}
            src={ShoulderBag}
          />
        </Group>
      </Container>
    </section>
  );
};
