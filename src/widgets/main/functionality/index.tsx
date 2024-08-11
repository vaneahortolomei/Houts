import React from 'react';
import styles from '@/widgets/main/functionality/Functionality.module.scss';
import { Container, Group, Title, Text, Image, Box, Flex } from '@mantine/core';
import BackPack from '@/assets/Backpack.png';
import ShoulderBag from '@/assets/Shoulder-bag.png';
import Bag1 from '@/assets/Bild-1.png';
import BagFull from '@/assets/BagFull.png';
import ImageWithDots from '@/features/components/AnimatedCircle';
import BagLug from '@/assets/BagLug.png';
import { useIsResponsive } from '@/hooks/use-is-responsive';

const AnimatedLine: React.FC = () => {
  return (
    <svg width="100" height="500" xmlns="http://www.w3.org/2000/svg">
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
    { top: '43%', right: '27%', animationDuration: '1.8s' },
    { top: '63%', right: '49%', animationDuration: '2.5s' }
  ];

  const containerStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'end',
    gap: '130px'
  };

  const imgStyles: React.CSSProperties = {
    width: '55%',
    height: 'auto'
  };

  const descriptionStyles: React.CSSProperties = {
    flex: '0 1 300px',
    marginRight: '100px',
    marginTop: '120px',
    marginBottom: '100px'
  };

  //Luggage section styles
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
    { top: '9%', left: '13%', animationDuration: '2.2s' },
    { top: '47%', left: '12%', animationDuration: '1.9s' }
  ];

  const containerLuggageStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'unset',
    justifyContent: 'flex-start'
    // gap: '330px'
  };

  const descriptionLuggageStyles: React.CSSProperties = {
    flex: '0 1 700px',
    marginRight: '100px',
    marginTop: '120px',
    marginBottom: '100px',
    alignSelf: 'center',
    order: 1
  };

  const imgLuggageStyles: React.CSSProperties = {
    width: 'auto',
    height: 'auto'
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
          <Title size="50px" fw={400}>
            FUNCTIONALITY
          </Title>
          <Text w={1000} fz={20} fw={500} mb={20} mt={10} ta={'center'}>
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
            w="49.8%"
            mr={'-1px'}
            fit={'contain'}
            src={BackPack}
            className={styles.functionality__img}
          />
          <Image
            w="50%"
            fit={'contain'}
            src={ShoulderBag}
            className={styles.functionality__img}
          />
        </Group>
        <Group
          justify="center"
          className={styles.functionality__titles}
          mb={20}
        >
          <Title size={'35px'} fw={400}>
            NOT ENOUGH? WE GOT YOU
            <Text span inherit fz={35} fw={400} c={'#A74127'}>
              {' '}
              COVERED
            </Text>
          </Title>
          <Text w={1000} fz={20} fw={500} mt={10} ta={'center'}>
            The modular bag 2-in-1 seamlessly transitions between a backpack and
            a shoulder bag, offering unparalleled versatility for dynamic
            lifestyles. Its innovative design allows easy conversion with
            detachable straps and secure compartments, catering to both casual
            and professional needs. This adaptable accessory ensures
            practicality and style, making it ideal for active professionals,
            travelers, and fashion-forward individuals.
          </Text>
        </Group>
        <Group style={{ alignItems: 'flex-start' }} gap={0}>
          <Image
            w="60%"
            fit={'contain'}
            src={Bag1}
            className={styles.functionality__img}
          />
          <Flex>
            <Title
              fz={20}
              w={120}
              mb={150}
              ta={'center'}
              style={{ alignSelf: 'end' }}
              fw={400}
            >
              WITHOUT
              <Text span inherit fz={20} fw={400} c={'#A74127'}>
                {' '}
                EXTENSION
              </Text>
            </Title>
            <Box>
              <AnimatedLine />
            </Box>
            <Box>
              <Title fz={16} mt={40} mb={20} fw={400} c={'#A74127'}>
                EXTENSION
              </Title>
              <Title fz={16} w={100} fw={400} mb={20}>
                EXPANDABLE COMPARTEMENT
              </Title>
              <Title fz={16} w={150} fw={400}>
                UP TO{' '}
                <Text span inherit fz={27} fw={600} c={'#A74127'}>
                  67%
                </Text>{' '}
                MORE SPACE
              </Title>
            </Box>
          </Flex>
        </Group>
      </Container>

      <Box mt={100} mb={200}>
        <ImageWithDots
          descriptions={descriptions}
          containerStyles={containerStyles}
          descriptionStyles={descriptionStyles}
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
