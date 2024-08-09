import React from 'react';
import {
  Container,
  Text,
  Group,
  Title,
  Box,
  Image,
  SimpleGrid,
  Flex,
  Anchor
} from '@mantine/core';
import styles from '@/widgets/main/sustainability/Sustainability.module.scss';
import Arrow from '@/assets/sustainability/Arrow.png';
import Bag from '@/assets/sustainability/Bag.png';
import Tree from '@/assets/sustainability/Tree.png';

export const Sustainability = () => {
  return (
    <section id="sustainability" style={{ backgroundColor: '#F6F4F1' }}>
      <Container size="xl">
        <Group
          justify="center"
          pt={50}
          pb={100}
          style={{ flexDirection: 'column' }}
        >
          <Title size="50px" ta={'center'} fw={400}>
            SUSTAINABILITY
          </Title>
          <Text ta="center" w={800}>
            For every Houts product, we plant one tree to do our bit for the
            environment. Join us on our mission to restore forests across the
            world. Follow our journey on:
          </Text>
          <Box ta={'center'}>
            <Text mb={15}>Follow our journey on:</Text>
            <Anchor
              className={styles.link}
              href="http://onetreeplanted.org"
              target="_blank"
            >
              ONETREEPLANTED.ORG
            </Anchor>
          </Box>
        </Group>
        <Flex justify={'center'} pb={50} gap={0}>
          <Flex align={'center'} direction={'column'} w={220}>
            <Image w={100} h={'auto'} src={Bag} />
            <Text fz={20} mt={10} fw={600} c={'#A74127'}>
              BAGS
            </Text>
          </Flex>
          <Image src={Arrow} w={225} h={'auto'} className={styles.img} />
          <Flex justify={'space-between'} align={'center'} direction={'column'}>
            <Image src={Tree} w={70} h={'auto'} mt={15} />
            <Text fz={20} mt={10} fw={600} c={'#A74127'}>
              ONE BAG = ONE TREE
            </Text>
          </Flex>
        </Flex>
      </Container>
      <Box style={{ backgroundColor: '#fff' }}>
        <Container size="xl">
          <SimpleGrid
            cols={2}
            pb={100}
            pt={50}
            style={{ alignItems: 'baseline', gap: '110px' }}
          >
            <Group align={'flex-start'}>
              <Title w={400} fz={30} fw={400} c={'#A74127'} mb={20}>
                GOING BEYOND NEUTRAL: OUR COMMITMENT TO A POSITIVE IMPACT
              </Title>
              <Text>
                At Houts, we believe that being carbon neutral, which means
                simply balancing the environmental harm we might cause, isn't
                enough. We see it as merely staying afloat. Instead, we
                challenge ourselves to consider every action through a clear
                lens: Does it have a negative, neutral, or positive impact on
                the climate?
              </Text>
              <Text>
                That's why we go further. We don't just aim to offset our carbon
                footprint; we commit to offsetting 110% of it. But we don’t stop
                there—we also take active steps to restore ecosystems that have
                been harmed by the widespread use of single-use paper and
                plastic. By adopting this approach, we ensure that every Houts
                product not only minimizes damage but actually contributes
                positively to our planet’s health.
              </Text>
            </Group>
            <Group align={'flex-start'} gap={0}>
              <Title mb={65} w={400} fz={30} fw={400} c={'#A74127'}>
                <Text span fz={40} fw={700}>
                  110%{' '}
                </Text>
                CARBON NEUTRAL COMMITMENT
              </Title>
              <Text mb={20}>
                Every year, we meticulously measure and offset 100% of our
                carbon footprint in partnership with{' '}
                <strong>OneTreePlanted</strong> while continuously working to
                reduce our emissions annually. But at Houts, we believe in doing
                more than just breaking even with the environment.
              </Text>
              <Text>
                We commit to offsetting at least 10% more carbon than we emit,
                ensuring that our impact is not just neutral but net
                positive—actively benefiting the climate.
              </Text>
            </Group>
          </SimpleGrid>
        </Container>
      </Box>
    </section>
  );
};
