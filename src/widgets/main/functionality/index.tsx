import React, { useRef } from 'react';
import styles from '@/widgets/main/functionality/Functionality.module.scss';
import {
  Container,
  Group,
  Title,
  Text,
  Image,
  Box,
  Center,
  Flex
} from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import BagEngPng from '@/assets/functionality/Bild-eng.png';
import BagEng1 from '@/assets/functionality/Bild-eng.webp';
import BagDePng from '@/assets/functionality/Bild-de.png';
import BagDe1 from '@/assets/functionality/Bild-de.webp';

import BagClothesPng1 from '@/assets/functionality/1.png';
import BagClothes1 from '@/assets/functionality/1.webp';
import BagClothesPng2 from '@/assets/functionality/2.png';
import BagClothes2 from '@/assets/functionality/2.webp';
import BagClothesPng3 from '@/assets/functionality/3.png';
import BagClothes3 from '@/assets/functionality/3.webp';

import BagFullPng from '@/assets/functionality/houts-bag.png';
import BagFull from '@/assets/functionality/houts-bag.webp';

import EmptyBagPng from '@/assets/functionality/EmptyBag.png';
import EmptyBag from '@/assets/functionality/EmptyBag.webp';

import ImageWithDots from '@/features/components/AnimatedCircle';

import BagLugPng from '@/assets/functionality/BagLug.png';
import BagLug from '@/assets/functionality/BagLug.webp';

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
  const autoplay = useRef(Autoplay({ delay: 3500 }));
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

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
    width: isResponsive ? '85%' : 'auto',
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
    height: 'auto',
    marginBottom: !isResponsive ? '-8px' : ''
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
            <div className={styles.functionality__img_f}>
              <Center p="md" h={'100%'}>
                <Text c="white" fz={36}>
                  {t('lang.functionality.img')}
                </Text>
              </Center>
            </div>
            <div className={styles.functionality__img_s}>
              <Center p="md" h={'100%'}>
                <Text c="white" fz={36}>
                  {t('lang.functionality.img1')}
                </Text>
              </Center>
            </div>
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
            <picture>
              <source
                srcSet={currentLanguage === 'en' ? BagEng1 : BagDe1}
                className={styles.functionality__img_bag}
                type="image/webp"
              />
              <source
                srcSet={currentLanguage === 'en' ? BagEngPng : BagDePng}
                className={styles.functionality__img_bag}
                type="image/png"
              />
              <Image
                fit={'contain'}
                src={currentLanguage === 'en' ? BagEng1 : BagDe1}
                alt={'baggage'}
                className={styles.functionality__img_bag}
              />
            </picture>
          </Group>
        </FadeInSection>
      </Container>

      <FadeInSection>
        <Box mt={100} mb={isResponsive ? 0 : 40}>
          <ImageWithDots
            descriptions={descriptions}
            containerStyles={containerStyles}
            descriptionStyles={descriptionStyles}
            containerGroupStyles={containerGroupStyles}
            imgStyles={imgStyles}
            titleTextStyles={titleTextStyles}
            descTextStyles={descTextStyles}
            circles={circles}
            imgPng={BagFullPng}
            img={BagFull}
            imgTitle={'Transformer'}
          />
        </Box>
      </FadeInSection>

      <FadeInSection>
        <Box mt={isResponsive ? 40 : 100} mb={isResponsive ? 40 : 150}>
          <Flex
            className={styles.functionality__carousel_flex}
            gap={isResponsive ? '30px' : '80px'}
            align={isResponsive ? 'flex-start' : 'center'}
            direction={isResponsive ? 'column' : 'row'}
          >
            <Box mx="auto" className={styles.functionality__img_carousel}>
              <picture>
                <source srcSet={EmptyBag} type="image/webp" />
                <source srcSet={EmptyBagPng} type="image/png" />
                <Image src={EmptyBag} alt={'baggage'} />
              </picture>
              <Box
                style={{
                  overflow: 'hidden',
                  position: 'absolute',
                  top: '20%',
                  left: '6%',
                  height: '70%',
                  width: '85%'
                }}
              >
                <Carousel
                  loop
                  withControls={false}
                  slideSize="33.33%"
                  onMouseEnter={autoplay.current.stop}
                  onMouseLeave={autoplay.current.reset}
                  orientation="vertical"
                  plugins={[autoplay.current]}
                  height="100%"
                  style={{ flex: 1 }}
                  styles={{
                    root: {
                      overflow: 'hidden',
                      maxHeight: '600px',
                      height: '100%'
                    },
                    viewport: {
                      borderRadius: '20px'
                    }
                  }}
                >
                  <Carousel.Slide>
                    <picture>
                      <source srcSet={BagClothes3} type="image/webp" />
                      <source srcSet={BagClothesPng3} type="image/png" />
                      <Image src={BagClothes3} alt={'clothes'} />
                    </picture>
                  </Carousel.Slide>
                  <Carousel.Slide>
                    <picture>
                      <source srcSet={BagClothes1} type="image/webp" />
                      <source srcSet={BagClothesPng1} type="image/png" />
                      <Image src={BagClothes1} alt={'clothes'} />
                    </picture>
                  </Carousel.Slide>
                  <Carousel.Slide>
                    <picture>
                      <source srcSet={BagClothes2} type="image/webp" />
                      <source srcSet={BagClothesPng2} type="image/png" />
                      <Image src={BagClothes2} alt={'clothes'} />
                    </picture>
                  </Carousel.Slide>
                </Carousel>
              </Box>
            </Box>
            <Box className={styles.functionality__carousel_desc}>
              <Title fz={isResponsive1300 ? 20 : 25} mb={20}>
                {t('lang.functionality.carouselLuggage.title')}
              </Title>
              <Text
                className={styles.functionality__carousel_desc_text}
                mb={20}
              >
                {t('lang.functionality.carouselLuggage.text')}
              </Text>
              <Text className={styles.functionality__carousel_desc_text}>
                {t('lang.functionality.carouselLuggage.text1')}
              </Text>
            </Box>
          </Flex>
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
            imgPng={BagLugPng}
            img={BagLug}
            imgTitle={'Luggage'}
          />
        </Box>
      </FadeInSection>
    </section>
  );
};
