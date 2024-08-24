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
import { useIsResponsive } from '@/hooks/use-is-responsive';
import FadeInSection from '@/features/components/FadeInSection';

export const Sustainability = () => {
  const isResponsive = useIsResponsive(1024);

  return (
    <section id="sustainability" className={styles.text}>
      <Container size="xl">
        <Group justify="center" className={styles.text__group}>
          <FadeInSection>
            <Title className={styles.text__title} ta={'center'} fw={400}>
              SUSTAINABILITY
            </Title>
          </FadeInSection>
          <FadeInSection>
            <Text className={styles.text__description} ta="center">
              For every Houts product, we plant one tree to do our bit for the
              environment. Join us on our mission to restore forests across the
              world. Follow our journey on:
            </Text>
          </FadeInSection>
          <FadeInSection>
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
          </FadeInSection>
        </Group>
        <FadeInSection>
          <Flex
            justify={'center'}
            align={'center'}
            pb={50}
            gap={0}
            direction={isResponsive ? 'column' : 'row'}
          >
            <Flex
              align={'center'}
              direction={'column'}
              w={220}
              mb={isResponsive ? 120 : 0}
            >
              <Image w={100} h={'auto'} src={Bag} />
              <Text fz={isResponsive ? 18 : 20} mt={10} fw={600} c={'#222027'}>
                BAGS
              </Text>
            </Flex>
            <Image src={Arrow} w={225} h={'auto'} className={styles.img} />
            <Flex
              justify={'space-between'}
              align={'center'}
              direction={'column'}
              mt={isResponsive ? 120 : 0}
            >
              <Image src={Tree} w={70} h={'auto'} mt={15} />
              <Text fz={isResponsive ? 18 : 20} mt={10} fw={600} c={'#222027'}>
                ONE BAG = ONE TREE
              </Text>
            </Flex>
          </Flex>
        </FadeInSection>
      </Container>
      <Box className={styles.text_sustainability}>
        <Container size="xl">
          <SimpleGrid
            cols={isResponsive ? 1 : 2}
            className={styles.text__group}
            style={{
              alignItems: 'baseline',
              gap: isResponsive ? '50px' : '110px'
            }}
          >
            <Group align={'flex-start'} justify={isResponsive ? 'center' : ''}>
              <Title
                w={400}
                fz={isResponsive ? 18 : 30}
                fw={400}
                c={'#222027'}
                mb={20}
                ta={isResponsive ? 'center' : 'left'}
              >
                GOING BEYOND NEUTRAL: OUR COMMITMENT TO A POSITIVE IMPACT
              </Title>
              <FadeInSection>
                <Text ta={isResponsive ? 'center' : 'left'}>
                  At Houts, we believe that being carbon neutral, which means
                  simply balancing the environmental harm we might cause, isn't
                  enough. We see it as merely staying afloat. Instead, we
                  challenge ourselves to consider every action through a clear
                  lens: Does it have a negative, neutral, or positive impact on
                  the climate?
                </Text>
                <Text ta={isResponsive ? 'center' : 'left'}>
                  That's why we go further. We don't just aim to offset our
                  carbon footprint; we commit to offsetting 110% of it. But we
                  don’t stop there—we also take active steps to restore
                  ecosystems that have been harmed by the widespread use of
                  single-use paper and plastic. By adopting this approach, we
                  ensure that every Houts product not only minimizes damage but
                  actually contributes positively to our planet’s health.
                </Text>
              </FadeInSection>
            </Group>
            <Group
              align={'flex-start'}
              justify={isResponsive ? 'center' : ''}
              gap={0}
            >
              <Title
                mb={isResponsive ? 20 : 65}
                w={400}
                fz={isResponsive ? 18 : 30}
                fw={400}
                c={'#222027'}
                ta={isResponsive ? 'center' : 'left'}
              >
                <Text span fz={isResponsive ? 18 : 40} fw={700}>
                  110%{' '}
                </Text>
                CARBON NEUTRAL COMMITMENT
              </Title>
              <FadeInSection>
                <Text mb={20} ta={isResponsive ? 'center' : 'left'}>
                  Every year, we meticulously measure and offset 100% of our
                  carbon footprint in partnership with{' '}
                  <strong>OneTreePlanted</strong> while continuously working to
                  reduce our emissions annually. But at Houts, we believe in
                  doing more than just breaking even with the environment.
                </Text>
                <Text ta={isResponsive ? 'center' : 'left'}>
                  We commit to offsetting at least 10% more carbon than we emit,
                  ensuring that our impact is not just neutral but net
                  positive—actively benefiting the climate.
                </Text>
              </FadeInSection>
            </Group>
          </SimpleGrid>
        </Container>
      </Box>
    </section>
  );
};
