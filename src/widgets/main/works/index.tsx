import React from 'react';
import {
  Container,
  Text,
  Group,
  Title,
  Box,
  Image,
  SimpleGrid,
  Flex
} from '@mantine/core';
import styles from '@/widgets/main/works/Works.module.scss';
import IconWorks1 from '@/assets/works/Icon-1.svg';
import IconWorks2 from '@/assets/works/Icon-2.svg';
import IconWorks3 from '@/assets/works/Icon-3.svg';
import IconWorks4 from '@/assets/works/Icon-4.svg';
import IconWorks5 from '@/assets/works/Icon-5.svg';

export const Works = () => {
  return (
    <section id="works" style={{ backgroundColor: '#F6F4F1' }}>
      <Container size="xl">
        <Group
          justify="center"
          pt={150}
          pb={100}
          style={{ flexDirection: 'column' }}
        >
          <Title size="50px" ta={'center'}>
            APPLE LEATHER? HOW IT WORKS?
          </Title>
          <Text ta="center" w={800}>
            Our bags, crafted from USDA-certified vegan ,,apple" leather using
            remnants from juice production, exemplify your commitment to
            circular fashion, seam­lessly blending sustainability with timeless
            elegance.
          </Text>
        </Group>
      </Container>
      <SimpleGrid
        cols={5}
        style={{ backgroundColor: '#fff' }}
        p={'200 0'}
        spacing={0}
      >
        <Flex direction="column" align="center" justify="start">
          <Box className={styles.flexWithLine} w={'100%'}>
            <Image
              className={styles.iconWrapper}
              src={IconWorks1}
              w={117}
              h={117}
            />
          </Box>
          <Title
            c={'#A74127'}
            fw={300}
            ta={'center'}
            w={155}
            fz={20}
            mb={20}
            mt={20}
          >
            IT ALL STARTED WITH AN APPLE
          </Title>
          <Text w={220} ta={'center'}>
            The “vegan” leather we use in our bags was once an apple growing on
            a tree
          </Text>
        </Flex>
        <Flex direction="column" align="center" justify="start">
          <Box className={styles.flexWithLine} w={'100%'}>
            <Image
              className={styles.iconWrapper}
              src={IconWorks2}
              w={117}
              h={117}
            />
          </Box>
          <Title
            c={'#A74127'}
            fw={300}
            ta={'center'}
            w={155}
            fz={20}
            mb={20}
            mt={20}
          >
            JUICE PRODUCTION
          </Title>
          <Text w={220} ta={'center'}>
            The fruit is not directly used in the production of the leather like
            material. The apples come mostly from the production of apple juice
          </Text>
        </Flex>
        <Flex direction="column" align="center" justify="start">
          <Box className={styles.flexWithLine} w={'100%'}>
            <Image
              className={styles.iconWrapper}
              src={IconWorks3}
              w={117}
              h={117}
            />
          </Box>
          <Title
            c={'#A74127'}
            fw={300}
            ta={'center'}
            w={100}
            fz={20}
            mb={20}
            mt={20}
          >
            APPLE RESIDUAL
          </Title>
          <Text w={220} ta={'center'}>
            We take this leftover apple pulp and turn it into a durable,
            eco-friendly material that looks and feels like leather.
          </Text>
        </Flex>
        <Flex direction="column" align="center" justify="start">
          <Box className={styles.flexWithLine} w={'100%'}>
            <Image
              className={styles.iconWrapper}
              src={IconWorks4}
              w={117}
              h={117}
            />
          </Box>
          <Title
            c={'#A74127'}
            fw={300}
            ta={'center'}
            w={155}
            fz={20}
            mb={20}
            mt={20}
          >
            "VEGAN" LEATHER
          </Title>
          <Text w={220} ta={'center'}>
            The remaining apple pulp and residues are pressed and dyed to form
            the material used in our bags.
          </Text>
        </Flex>
        <Flex direction="column" align="center" justify="start">
          <Box className={styles.flexWithLine} w={'100%'}>
            <Image
              className={styles.iconWrapper}
              src={IconWorks5}
              w={117}
              h={117}
            />
          </Box>
          <Title
            c={'#A74127'}
            fw={300}
            ta={'center'}
            w={250}
            fz={20}
            mb={20}
            mt={20}
          >
            UPCYCLED ECOLOGICAL BAGS
          </Title>
          <Text w={220} ta={'center'}>
            Here is the start your commitment to circular fashion, seamlessly
            blending sustainability with timeless elegance.
          </Text>
        </Flex>
      </SimpleGrid>
    </section>
  );
};
