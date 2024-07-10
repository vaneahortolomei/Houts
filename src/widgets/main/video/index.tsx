import React from 'react';
import { Box } from '@mantine/core';
import Poster from '@/assets/Poster.jpg';
import Video from '@/assets/HOUTS.mp4';
import styles from './Video.module.scss';

export const TeaserVideo = () => {
  return (
    <section className={styles.myVideo}>
      <Box>
        <video width="100%" height="auto" autoPlay loop muted poster={Poster}>
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
    </section>
  );
};
