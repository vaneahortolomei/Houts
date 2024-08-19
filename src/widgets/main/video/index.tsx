import React from 'react';
import { Box } from '@mantine/core';
import Poster from '@/assets/Poster.jpg';
import Video from '@/assets/HOUTS.mp4';
import styles from './Video.module.scss';
import { useIsResponsive } from '@/hooks/use-is-responsive';

export const TeaserVideo = () => {
  const isResponsive = useIsResponsive(1024);

  return (
    <section id="video" className={styles.myVideo}>
      <Box>
        <video
          className={styles.myVideo__video}
          width="100%"
          height="auto"
          controls={isResponsive}
          autoPlay={!isResponsive}
          loop
          muted
          poster={Poster}
        >
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
    </section>
  );
};
