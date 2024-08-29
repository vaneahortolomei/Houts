import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';
import { Box, Text, Title, Transition } from '@mantine/core';
import { useTranslation } from 'react-i18next';

interface Description {
  title: string;
  description: string;
}

interface CircleData {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  animationDuration: string;
}

interface Props {
  descriptions: Description[];
  containerStyles: React.CSSProperties;
  imgStyles: React.CSSProperties;
  descriptionStyles: React.CSSProperties;
  descTextStyles: React.CSSProperties;
  titleTextStyles: React.CSSProperties;
  containerGroupStyles?: React.CSSProperties;
  containerLuggageGroupStyles?: React.CSSProperties;
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
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #222027;
  position: absolute;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
  }

  animation: pulse ${({ animationDuration }) => animationDuration} infinite;

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.5);
      opacity: 0.5;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 50%;
    @media (min-width: 768px) {
      width: 15px;
      height: 15px;
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #222027;
    animation: wave ${({ animationDuration }) => animationDuration} infinite;
  }

  @keyframes wave {
    0% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.6;
    }
    50% {
      transform: translate(-50%, -50%) scale(1.5);
      opacity: 0.3;
    }
    100% {
      transform: translate(-50%, -50%) scale(2);
      opacity: 0;
    }
  }
`;

const ImageWithDots: React.FC<Props> = ({
  containerLuggageGroupStyles,
  containerGroupStyles,
  descriptions,
  containerStyles,
  imgStyles,
  descriptionStyles,
  circles,
  descTextStyles,
  titleTextStyles,
  img,

  imgTitle
}) => {
  const [selectedText, setSelectedText] = useState(descriptions[0]);
  const [opened, setOpened] = useState(true);
  const { i18n } = useTranslation();

  const handleCircleClick = (index: number) => {
    setOpened(false);
    setTimeout(() => {
      setSelectedText(descriptions[index]);
      setOpened(true);
    }, 300);
  };

  useEffect(() => {
    setSelectedText(descriptions[0]);
  }, [i18n.language, descriptions]);

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
              <Title style={titleTextStyles} mb={20} fw={400} c={'#222027'}>
                {selectedText.title}
              </Title>
              <Text
                style={{ whiteSpace: 'pre-line', titleTextStyles }}
                dangerouslySetInnerHTML={{ __html: selectedText.description }}
              />
            </Box>
          )}
        </Transition>
      </Box>
      <Box
        style={{
          position: 'relative',
          flex: 1,
          ...containerGroupStyles,
          ...containerLuggageGroupStyles
        }}
      >
        <img src={img} alt={imgTitle} style={imgStyles} />
        {circles.map((circle, index: number) => (
          <Circle
            key={index}
            style={{
              top: circle.top,
              left: circle.left,
              bottom: circle.bottom,
              right: circle.right
            }}
            animationDuration={circle.animationDuration}
            onClick={() => handleCircleClick(index)}
          />
        ))}
      </Box>
    </ImgContainer>
  );
};

export default ImageWithDots;
