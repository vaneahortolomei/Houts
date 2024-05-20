import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Box, Text, Title, Transition } from '@mantine/core';

interface Description {
  title: string;
  description: string;
}

interface CircleData {
  top: string;
  left: string;
  animationDuration: string;
}

interface Props {
  descriptions: Description[];
  containerStyles: React.CSSProperties;
  imgStyles: React.CSSProperties;
  descriptionStyles: React.CSSProperties;
  circles: CircleData[];
  img: string;
  imgTitle: string;
}

const ImgContainer = styled.div`
  position: relative;
  width: auto;
  height: auto;
`;

export const Circle = styled.div<{ animationDuration: string }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #a74127;
  animation: pulse ${({ animationDuration }) => animationDuration} infinite;
  position: absolute;
  cursor: pointer;

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 15px;
    height: 15px;
    background-color: white;
    border-radius: 50%;
  }
`;

const ImageWithDots: React.FC<Props> = ({
  descriptions,
  containerStyles,
  imgStyles,
  descriptionStyles,
  circles,
  img,
  imgTitle
}) => {
  const [selectedText, setSelectedText] = useState(descriptions[0]);
  const [opened, setOpened] = useState(true);

  const handleCircleClick = (index: number) => {
    setOpened(false);
    setTimeout(() => {
      setSelectedText(descriptions[index]);
      setOpened(true);
    }, 300);
  };

  return (
    <ImgContainer style={containerStyles}>
      <Box style={descriptionStyles}>
        <Transition
          mounted={opened}
          transition="fade"
          duration={400}
          timingFunction="ease"
        >
          {(styles) => (
            <Box style={styles}>
              <Title size={25} mb={20} c={'#A74127'}>
                {selectedText.title}
              </Title>
              <Text>{selectedText.description}</Text>
            </Box>
          )}
        </Transition>
      </Box>
      <img src={img} alt={imgTitle} style={imgStyles} />
      {circles.map((circle, index: number) => (
        <Circle
          key={index}
          style={{ top: circle.top, left: circle.left }}
          animationDuration={circle.animationDuration}
          onClick={() => handleCircleClick(index)}
        />
      ))}
    </ImgContainer>
  );
};

export default ImageWithDots;
