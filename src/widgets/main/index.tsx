import { AppShell } from '@mantine/core';
import { TopSection } from '@/widgets/main/top';
import { About } from '@/widgets/main/about';
import React, { ReactNode } from 'react';
import { Functionality } from '@/widgets/main/functionality';
import { BagOptions } from '@/widgets/main/options';
import { TeaserVideo } from '@/widgets/main/video';
import { Reviews } from '@/widgets/main/reviews';
import { SocialProof } from '@/widgets/main/proof';
import { Journey } from '@/widgets/main/journey';
import { Works } from '@/widgets/main/works';
import { Sustainability } from '@/widgets/main/sustainability';
import { motion } from 'framer-motion';

interface MotionSectionProps {
  children: ReactNode;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 }
};

const MotionSection: React.FC<MotionSectionProps> = ({ children }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
    variants={sectionVariants}
  >
    {children}
  </motion.div>
);

export const Main = () => {
  return (
    <>
      <AppShell.Main style={{ padding: 0 }}>
        <TopSection />
        <MotionSection>
          <About />
        </MotionSection>
        <MotionSection>
          <Functionality />
        </MotionSection>
        <MotionSection>
          <BagOptions />
        </MotionSection>
        <MotionSection>
          <TeaserVideo />
        </MotionSection>
        <MotionSection>
          {' '}
          <Reviews />
        </MotionSection>
        <MotionSection>
          <SocialProof />
        </MotionSection>
        <MotionSection>
          <Journey />
        </MotionSection>
        <MotionSection>
          {' '}
          <Works />
        </MotionSection>
        <MotionSection>
          {' '}
          <Sustainability />
        </MotionSection>
      </AppShell.Main>
    </>
  );
};
