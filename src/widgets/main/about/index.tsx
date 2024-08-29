import React from 'react';
import { Container, Text, Title, Group, Box } from '@mantine/core';
import styles from './About.module.scss';
import ImageWithDots from '@/features/components/AnimatedCircle';
import FadeInSection from '@/features/components/FadeInSection';
import Bags from '@/assets/Bags.png';
import { useIsResponsive } from '@/hooks/use-is-responsive';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const isResponsive = useIsResponsive(1024);
  const isResponsive1300 = useIsResponsive(1300);
  const { t } = useTranslation();

  const descriptions = [
    {
      title: `${t('lang.about.bagDescription.backsideTopPocket.title')}`,
      description: `${t('lang.about.bagDescription.backsideTopPocket.text')}`
    },
    {
      title: `${t('lang.about.bagDescription.luggageStrap.title')}`,
      description: `${t('lang.about.bagDescription.luggageStrap.text')}`
    },
    {
      title: `${t('lang.about.bagDescription.backsideBottomPocket.title')}`,
      description: `${t('lang.about.bagDescription.backsideBottomPocket.text')}`
    },
    {
      title: `${t('lang.about.bagDescription.minimalistDesign.title')}`,
      description: `${t('lang.about.bagDescription.minimalistDesign.text')}`
    },
    {
      title: `${t('lang.about.bagDescription.frontSidePocket.title')}`,
      description: `${t('lang.about.bagDescription.frontSidePocket.text')}`
    }
  ];

  const circles = [
    {
      top: '11%',
      left: '1%',
      animationDuration: '2s'
    },
    {
      top: '52%',
      left: '4%',
      animationDuration: '2.4s'
    },
    {
      top: '65%',
      left: '0%',
      animationDuration: '2.2s'
    },
    {
      top: '35%',
      left: '60%',
      animationDuration: '3s'
    },
    {
      top: '62%',
      left: '61%',
      animationDuration: '2.7s'
    }
  ];

  const containerStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: isResponsive ? 'column' : 'row',
    alignItems: isResponsive1300 ? 'center' : 'flex-start',
    justifyContent: 'space-between',
    gap: isResponsive ? '50px' : '0'
  };

  const imgStyles: React.CSSProperties = {
    position: 'relative',
    width: isResponsive ? '100%' : '100%',
    height: 'auto'
  };

  const descriptionStyles: React.CSSProperties = {
    flex: isResponsive ? '' : '0 1 300px',
    marginRight: isResponsive1300 ? (isResponsive ? '' : '50px') : '100px',
    marginTop: isResponsive1300 ? '0' : '120px',
    order: isResponsive ? 1 : 0,
    marginBottom: isResponsive ? '40px' : ''
  };

  const titleTextStyles: React.CSSProperties = {
    fontSize: isResponsive1300 ? '20px' : '25px'
  };

  const descTextStyles: React.CSSProperties = {
    fontSize: '16px'
  };

  return (
    <section className={styles.about} id="about">
      <Container size="xl">
        <Group justify="center" className={styles.about__titles}>
          <Title fw={400} className={styles.about__title}>
            {t('lang.about.title')}
          </Title>
          <Box className={styles.about__text_group}>
            <Text fz={20} fw={500} mb={20} mt={10}>
              {t('lang.about.subtitle')}
            </Text>
            <Text
              fz={20}
              fw={500}
              mb={30}
              className={styles.about__description}
            >
              {t('lang.about.desc')}
            </Text>
          </Box>
          <Text fz={isResponsive ? 17 : 35} c={'#A4A4A4'}>
            {t('lang.about.title2')}
          </Text>
        </Group>
        <FadeInSection>
          <Box mt={isResponsive ? 10 : 50} pb={isResponsive ? 10 : 70}>
            <ImageWithDots
              descriptions={descriptions}
              containerStyles={containerStyles}
              descriptionStyles={descriptionStyles}
              imgStyles={imgStyles}
              titleTextStyles={titleTextStyles}
              descTextStyles={descTextStyles}
              circles={circles}
              img={Bags}
              imgTitle={'BACKSIDE & FRONT'}
            />
          </Box>
        </FadeInSection>
      </Container>
    </section>
  );
};
