import React from 'react';
import styles from '@/widgets/main/functionality/Functionality.module.scss';
import {
  Container,
  Group,
  Title,
  Text,
  Image,
  Box,
  BackgroundImage,
  Center
} from '@mantine/core';
import BackPack from '@/assets/functionality/Backpack.png';
import ShoulderBag from '@/assets/functionality/Shoulder-bag.png';
import Bag1 from '@/assets/functionality/Bild-eng.png';
import BagFull from '@/assets/functionality/houts-bag.png';
import BagInside from '@/assets/functionality/Inside.png';
import ImageWithDots from '@/features/components/AnimatedCircle';
import BagLug from '@/assets/functionality/BagLug.png';
import { useIsResponsive } from '@/hooks/use-is-responsive';
import { useTranslation } from 'react-i18next';
import FadeInSection from '@/features/components/FadeInSection';

const AnimatedLine: React.FC = () => {
  return (
    <svg width="100" height="330" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          {`
            .line {
              stroke-dasharray: 140;
              stroke-dashoffset: 140;
              animation: dash 1s linear forwards;
            }
            .circle {
              animation: move 1s linear forwards;
            }
            @keyframes dash {
              to {
                stroke-dashoffset: 0;
              }
            }
            @keyframes move {
              from {
                cy: 60;
              }
              to {
                cy: 200;
              }
            }
          `}
        </style>
      </defs>

      <line x1="50" y1="445" x2="50" y2="50" stroke="#c0c0c0" strokeWidth="2" />
      <line
        x1="50"
        y1="55"
        x2="50"
        y2="200"
        stroke="#b0411b"
        strokeWidth="2"
        className="line"
      />
      <polygon points="45,55 55,55 50,45" fill="#b0411b" />
      <circle cx="50" cy="60" r="5" fill="#b0411b" className="circle" />
      <circle cx="50" cy="445" r="5" fill="#c0c0c0" />
    </svg>
  );
};

export default AnimatedLine;

export const Functionality = () => {
  const isResponsive = useIsResponsive(1024);
  const isResponsive1300 = useIsResponsive(1300);
  const { t } = useTranslation();

  const descriptions = [
    {
      title: `${t('lang.functionality.horizontalDesc.compact.title')}`,
      description: `${t('lang.functionality.horizontalDesc.compact.desc')}`
    },
    {
      title: `${t('lang.functionality.horizontalDesc.versatile.title')}`,
      description: `${t('lang.functionality.horizontalDesc.versatile.desc')}`
    }
  ];

  const circles = [
    { top: '18%', right: '66%', animationDuration: '1.8s' },
    { top: '80%', left: '18%', animationDuration: '2.5s' }
  ];

  const containerStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: isResponsive ? 'column' : 'row',
    alignItems: 'flex-end',
    justifyContent: 'end',
    gap: isResponsive ? '0' : '100px'
  };

  const imgStyles: React.CSSProperties = {
    width: 'auto',
    height: 'auto'
  };

  const containerGroupStyles: React.CSSProperties = {
    width: isResponsive ? '70%' : 'auto',
    flex: '0 1 auto'
  };

  const descriptionStyles: React.CSSProperties = {
    flex: isResponsive ? '0' : '0 1 500px',
    marginRight: isResponsive ? '0' : '80px',
    marginTop: isResponsive ? '50px' : '120px',
    marginBottom: isResponsive ? '40px' : '100px',
    padding: '0 20px',
    order: isResponsive ? 1 : 0
  };

  /** Luggage Inside section styles */

  const luggageInsideDescriptions = [
    {
      title: `${t('lang.functionality.luggageInside.inside.title')}`,
      description: `${t('lang.functionality.luggageInside.inside.desc')}`
    }
  ];

  const luggageInsideCircles = [
    { top: '30%', left: '58%', animationDuration: '2.2s' }
  ];

  const containerInsideStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: isResponsive ? 'column' : 'row',
    alignItems: isResponsive ? 'baseline' : 'center',
    justifyContent: 'flex-start'
  };

  const imgInsideStyles: React.CSSProperties = {
    width: isResponsive ? 'auto' : '75%',
    height: 'auto'
  };

  const descriptionInsideLuggageStyles: React.CSSProperties = {
    flex: isResponsive ? 'none' : '0 1 70%',
    marginRight: isResponsive ? '0' : '100px',
    marginTop: isResponsive ? '50px' : '120px',
    marginBottom: isResponsive ? '40px' : '100px',
    padding: '0 20px',
    alignSelf: 'center',
    order: 1
  };

  const containerInsideGroupStyles: React.CSSProperties = {
    width: isResponsive ? '70%' : 'auto',
    flex: '0 1 100%'
  };

  /** Luggage section styles */

  const luggageDescriptions = [
    {
      title: `${t('lang.functionality.luggageDesc.instant.title')}`,
      description: `${t('lang.functionality.luggageDesc.instant.desc')}`
    },
    {
      title: `${t('lang.functionality.luggageDesc.luggage.title')}`,
      description: `${t('lang.functionality.luggageDesc.luggage.desc')}`
    }
  ];

  const luggageCircles = [
    { top: '9%', left: '35%', animationDuration: '2.2s' },
    { top: '47%', left: '30%', animationDuration: '1.9s' }
  ];

  const containerLuggageStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: isResponsive ? 'column' : 'row',
    alignItems: 'unset',
    justifyContent: 'flex-start'
  };

  const descriptionLuggageStyles: React.CSSProperties = {
    flex: isResponsive ? 'none' : '0 1 700px',
    marginRight: isResponsive ? '0' : '100px',
    marginTop: isResponsive ? '50px' : '120px',
    marginBottom: isResponsive ? '40px' : '100px',
    padding: '0 20px',
    alignSelf: 'center',
    order: 1
  };

  const imgLuggageStyles: React.CSSProperties = {
    width: 'auto',
    height: 'auto'
  };

  const containerLuggageGroupStyles: React.CSSProperties = {
    display: 'flex',
    flex: '0 1 auto'
  };

  const titleTextStyles: React.CSSProperties = {
    fontSize: isResponsive1300 ? '20px' : '25px'
  };

  const descTextStyles: React.CSSProperties = {
    fontSize: '16px'
  };

  return (
    <section className={styles.functionality} id="functionality">
      <Container size="xl">
        <Group justify="center" className={styles.functionality__titles}>
          <FadeInSection>
            <Title className={styles.functionality__title} fw={400}>
              {t('lang.functionality.title')}
            </Title>
          </FadeInSection>
          <FadeInSection>
            <Text
              className={styles.functionality__desc}
              maw={1000}
              fw={500}
              mb={20}
              mt={10}
              ta={'center'}
            >
              {t('lang.functionality.desc')}
            </Text>
          </FadeInSection>
          <FadeInSection>
            <Title size={isResponsive ? 17 : 35} fw={400}>
              {t('lang.functionality.subtitle')}
              <Text
                span
                inherit
                fz={isResponsive ? 17 : 35}
                fw={400}
                c={'#222027'}
              >
                {' '}
                {t('lang.functionality.subtitle2')}
              </Text>
            </Title>
          </FadeInSection>
        </Group>
        <FadeInSection>
          <Group
            justify="center"
            gap={0}
            className={styles.functionality__img_container}
          >
            <BackgroundImage
              mr={'-1px'}
              src={BackPack}
              className={styles.functionality__img_f}
            >
              <Center p="md" h={'100%'}>
                <Text c="white" fz={36}>
                  {t('lang.functionality.img')}
                </Text>
              </Center>
            </BackgroundImage>
            <BackgroundImage
              src={ShoulderBag}
              className={styles.functionality__img_s}
            >
              <Center p="md" h={'100%'}>
                <Text c="white" fz={36}>
                  {t('lang.functionality.img1')}
                </Text>
              </Center>
            </BackgroundImage>
          </Group>
        </FadeInSection>
        <Group
          justify="center"
          className={styles.functionality__titles}
          mb={20}
        >
          <FadeInSection>
            <Title size={'35px'} fw={400} ta={'center'}>
              {t('lang.functionality.title2')}
              <Text span inherit fz={35} fw={400} c={'#222027'}>
                {' '}
                {t('lang.functionality.title3')}
              </Text>
            </Title>
          </FadeInSection>
          <FadeInSection>
            <Text
              className={styles.functionality__desc}
              maw={1000}
              fw={500}
              mt={10}
              ta={'center'}
            >
              {t('lang.functionality.desc2')}
            </Text>
          </FadeInSection>
        </Group>
        <FadeInSection>
          <Group className={styles.functionality__bagGroup} gap={0}>
            <Image
              fit={'contain'}
              src={Bag1}
              className={styles.functionality__img_bag}
            />
          </Group>
        </FadeInSection>
      </Container>

      <FadeInSection>
        <Box mt={100} mb={40}>
          <ImageWithDots
            descriptions={descriptions}
            containerStyles={containerStyles}
            descriptionStyles={descriptionStyles}
            containerGroupStyles={containerGroupStyles}
            imgStyles={imgStyles}
            titleTextStyles={titleTextStyles}
            descTextStyles={descTextStyles}
            circles={circles}
            img={BagFull}
            imgTitle={'Transformer'}
          />
        </Box>
      </FadeInSection>

      <FadeInSection>
        <Box mt={100} mb={isResponsive ? 40 : 150}>
          <ImageWithDots
            descriptions={luggageInsideDescriptions}
            containerStyles={containerInsideStyles}
            descriptionStyles={descriptionInsideLuggageStyles}
            containerInsideGroupStyles={containerInsideGroupStyles}
            imgStyles={imgInsideStyles}
            titleTextStyles={titleTextStyles}
            descTextStyles={descTextStyles}
            circles={luggageInsideCircles}
            img={BagInside}
            imgTitle={'Transformer'}
          />
        </Box>
      </FadeInSection>

      <FadeInSection>
        <Box>
          <ImageWithDots
            descriptions={luggageDescriptions}
            containerStyles={containerLuggageStyles}
            descriptionStyles={descriptionLuggageStyles}
            imgStyles={imgLuggageStyles}
            containerLuggageGroupStyles={containerLuggageGroupStyles}
            titleTextStyles={titleTextStyles}
            descTextStyles={descTextStyles}
            circles={luggageCircles}
            img={BagLug}
            imgTitle={'Luggage'}
          />
        </Box>
      </FadeInSection>
    </section>
  );
};
