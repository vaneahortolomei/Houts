import React from 'react';
import { Container, Text, Group, Title } from '@mantine/core';

export const SocialProof = () => {
  return (
    <section id="social-proof" style={{ backgroundColor: '#F6F4F1' }}>
      <Container size="xl">
        <Group
          justify="center"
          pt={150}
          pb={100}
          style={{ flexDirection: 'column' }}
        >
          <Title size="50px" ta={'center'}>
            SOCIAL PROOF
          </Title>
          <Text ta="center" w={800}>
            Showcased at prestigious events like ILM Offenbach and Thincubator,
            our 2-in-1 bag has garnered acclaim for its innovative design and
            versatility. It has received positive feedback from both industry
            experts and consumers, establishing itself as a standout product.
            These showcases have significantly enhanced its credibility and
            appeal in the competitive fashion and accessory market, making it a
            favored choice among discerning customers looking for both style and
            functionality.
          </Text>
        </Group>
      </Container>
    </section>
  );
};
