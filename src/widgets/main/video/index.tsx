import React from 'react';
import { Box } from '@mantine/core';
import Poster from '@/assets/Poster.jpg';
import styles from './Video.module.scss';

export const TeaserVideo = () => {
  return (
    <section className={styles.myVideo}>
      <Box>
        <video width="100%" height="auto" controls poster={Poster}>
          <source src="/public/HOUTS.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
    </section>
  );
};
