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
  containerInsideGroupStyles?: React.CSSProperties;
  imgStyles: React.CSSProperties;
  descriptionStyles: React.CSSProperties;
  descTextStyles: React.CSSProperties;
  titleTextStyles: React.CSSProperties;
  containerGroupStyles?: React.CSSProperties;
  containerLuggageGroupStyles?: React.CSSProperties;
  circles: CircleData[];
  img: string;
  imgPng?: string;
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
  transition: transform 0.3s ease-in-out;

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

  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
  }

  &:hover {
    transform: scale(1.5);
    opacity: 0.8;
  }
`;

const ImageWithDots: React.FC<Props> = ({
  containerLuggageGroupStyles,
  containerGroupStyles,
  containerInsideGroupStyles,
  descriptions,
  containerStyles,
  imgStyles,
  descriptionStyles,
  circles,
  descTextStyles,
  titleTextStyles,
  img,
  imgPng,
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
          ...containerLuggageGroupStyles,
          ...containerInsideGroupStyles
        }}
      >
        <picture>
          <source srcSet={img} style={imgStyles} type="image/webp" />
          <source srcSet={imgPng} style={imgStyles} type="image/png" />
          <img src={img} alt={imgTitle} style={imgStyles} />
        </picture>
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
