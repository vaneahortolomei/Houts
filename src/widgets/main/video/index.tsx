import React from 'react';
import { Box } from '@mantine/core';
import Poster from '@/assets/Poster.jpg';
import styles from './Video.module.scss';

export const TeaserVideo = () => {
  return (
    <section className={styles.myVideo}>
      <Box>
        <video width="100%" height="auto" autoPlay loop muted poster={Poster}>
          <source src="/src/assets/HOUTS.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
    </section>
  );
};
