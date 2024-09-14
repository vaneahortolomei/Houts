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
import { useTranslation } from 'react-i18next';

export const Sustainability = () => {
  const isResponsive = useIsResponsive(1024);
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <section id="sustainability" className={styles.text}>
      <Container size="xl">
        <Group justify="center" className={styles.text__group}>
          <FadeInSection>
            <Title className={styles.text__title} ta={'center'} fw={400}>
              {t('lang.sustainability.title')}
            </Title>
          </FadeInSection>
          <FadeInSection>
            <Text className={styles.text__description} ta="center">
              {t('lang.sustainability.desc')}
            </Text>
          </FadeInSection>
          <FadeInSection>
            <Box ta={'center'}>
              <Text mb={15}>{t('lang.sustainability.subtitle')}</Text>
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
              <Image w={100} h={'auto'} src={Bag} alt={'Bag'} />
              <Text fz={isResponsive ? 18 : 20} mt={10} fw={600} c={'#222027'}>
                {t('lang.sustainability.imgText')}
              </Text>
            </Flex>
            <Image
              src={Arrow}
              w={225}
              h={'auto'}
              className={styles.img}
              alt={'Arrow'}
            />
            <Flex
              justify={'space-between'}
              align={'center'}
              direction={'column'}
              mt={isResponsive ? 120 : 0}
            >
              <Image src={Tree} w={70} h={'auto'} mt={15} alt={'Tree'} />
              <Text fz={isResponsive ? 18 : 20} mt={10} fw={600} c={'#222027'}>
                {t('lang.sustainability.imgText1')}
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
                {t('lang.sustainability.textSection.col.title')}
              </Title>
              <FadeInSection>
                <Text mb={20} ta={isResponsive ? 'center' : 'left'}>
                  {t('lang.sustainability.textSection.col.desc')}
                </Text>
                <Text ta={isResponsive ? 'center' : 'left'}>
                  {t('lang.sustainability.textSection.col.desc1')}
                </Text>
              </FadeInSection>
            </Group>
            <Group
              align={'flex-start'}
              justify={isResponsive ? 'center' : ''}
              gap={0}
            >
              <Title
                mb={isResponsive ? 20 : currentLanguage === 'de' ? 25 : 60}
                w={400}
                fz={isResponsive ? 18 : 30}
                fw={400}
                c={'#222027'}
                ta={isResponsive ? 'center' : 'left'}
              >
                <Text span fz={isResponsive ? 18 : 40} fw={700}>
                  {t('lang.sustainability.textSection.col1.title')}{' '}
                </Text>
                {t('lang.sustainability.textSection.col1.title1')}
              </Title>
              <FadeInSection>
                <Text mb={20} ta={isResponsive ? 'center' : 'left'}>
                  {t('lang.sustainability.textSection.col1.desc')}
                </Text>
                <Text ta={isResponsive ? 'center' : 'left'}>
                  {t('lang.sustainability.textSection.col1.desc1')}
                </Text>
              </FadeInSection>
            </Group>
          </SimpleGrid>
        </Container>
      </Box>
    </section>
  );
};
