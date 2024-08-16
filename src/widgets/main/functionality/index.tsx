import React from 'react';
import styles from '@/widgets/main/functionality/Functionality.module.scss';
import { Container, Group, Title, Text, Image, Box } from '@mantine/core';
import BackPack from '@/assets/functionality/Backpack.png';
import ShoulderBag from '@/assets/functionality/Shoulder-bag.png';
import Bag1 from '@/assets/functionality/Bild-1.png';
import BagFull from '@/assets/functionality/BagFull.png';
import ImageWithDots from '@/features/components/AnimatedCircle';
import BagLug from '@/assets/functionality/BagLug.png';
import BagArrow from '@/assets/functionality/bag-arrow.png';
import { useIsResponsive } from '@/hooks/use-is-responsive';

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

  const descriptions = [
    {
      title: 'DOUBLE LAPTOP/TABLET POCKET',
      description:
        'No need for a separate laptop case! Our bag features a padded laptop pocket designed for dual use as both a backpack and a shoulder bag. ' +
        'This integrated protection shields your laptop from external impacts, ensuring it stays safe and secure no matter how you carry it.'
    },
    {
      title: 'DOUBLE LAPTOP/TABLET POCKET',
      description:
        'No need for a separate laptop case! Our bag features a padded laptop pocket designed for dual use as both a backpack and a shoulder bag. ' +
        'This integrated protection shields your laptop from external impacts, ensuring it stays safe and secure no matter how you carry it.'
    }
  ];

  const circles = [
    { top: '40%', right: '48%', animationDuration: '1.8s' },
    { top: '63%', left: '8%', animationDuration: '2.5s' }
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

  /** Luggage section styles */

  const luggageDescriptions = [
    {
      title: 'INSTANT VERTICAL LAPTOP ACCESS',
      description:
        'Our design allows you to quickly and effortlessly retrieve your laptop from a standing position without having to dig through other contents or lay the bag flat. Perfect for tight spaces like   security lines or busy coffee shops, this feature enhances convenience and saves time, making your travel and work transitions smoother and more efficient.'
    },
    {
      title: 'LUGGAGE STRAP',
      description:
        'Our bag includes a durable luggage strap, making it easy to secure to your rolling suitcase. This convenient feature boosts mobility and simplifies travel, ensuring a seamless journey wherever you go.'
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
    fontSize: isResponsive1300 ? '16px' : '20px'
  };

  return (
    <section className={styles.functionality} id="functionality">
      <Container size="xl">
        <Group justify="center" className={styles.functionality__titles}>
          <Title fw={400}>FUNCTIONALITY</Title>
          <Text
            className={styles.functionality__desc}
            maw={1000}
            fw={500}
            mb={20}
            mt={10}
            ta={'center'}
          >
            The modular bag 2-in-1 seamlessly transitions between a backpack and
            a shoulder bag, offering unparalleled versatility for dynamic
            lifestyles. Its innovative design allows easy conversion with
            detachable straps and secure compartments, catering to both casual
            and professional needs. This adaptable accessory ensures
            practicality and style, making it ideal for active professionals,
            travelers, and fashion-forward individuals.
          </Text>
          <Title size={'35px'} fw={400}>
            TWO BAGS IN
            <Text span inherit fz={35} fw={400} c={'#A74127'}>
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
            mr={'-1px'}
            fit={'contain'}
            src={BackPack}
            className={styles.functionality__img_f}
          />
          <Image
            fit={'contain'}
            src={ShoulderBag}
            className={styles.functionality__img_s}
          />
        </Group>
        <Group
          justify="center"
          className={styles.functionality__titles}
          mb={20}
        >
          <Title size={'35px'} fw={400} ta={'center'}>
            NOT ENOUGH? WE GOT YOU
            <Text span inherit fz={35} fw={400} c={'#A74127'}>
              {' '}
              COVERED
            </Text>
          </Title>
          <Text
            className={styles.functionality__desc}
            maw={1000}
            fw={500}
            mt={10}
            ta={'center'}
          >
            The modular bag 2-in-1 seamlessly transitions between a backpack and
            a shoulder bag, offering unparalleled versatility for dynamic
            lifestyles. Its innovative design allows easy conversion with
            detachable straps and secure compartments, catering to both casual
            and professional needs. This adaptable accessory ensures
            practicality and style, making it ideal for active professionals,
            travelers, and fashion-forward individuals.
          </Text>
        </Group>
        <Group className={styles.functionality__bagGroup} gap={0}>
          <Image
            fit={'contain'}
            src={Bag1}
            className={styles.functionality__img_bag}
          />
          <Image
            fit={'contain'}
            src={BagArrow}
            className={styles.functionality__img_arrow}
          />
        </Group>
      </Container>

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
    </section>
  );
};
