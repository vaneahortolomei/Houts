import { AppShell } from '@mantine/core';
import { TopSection } from '@/widgets/main/top';
import { About } from '@/widgets/main/about';
import React from 'react';
import { Functionality } from '@/widgets/main/functionality';
import { BagOptions } from '@/widgets/main/options';
import { TeaserVideo } from '@/widgets/main/video';
import { Reviews } from '@/widgets/main/reviews';
import { SocialProof } from '@/widgets/main/proof';
import { Journey } from '@/widgets/main/journey';

export const Main = () => {
  return (
    <>
      <AppShell.Main style={{ padding: 0 }}>
        <TopSection />
        <About />
        <Functionality />
        <BagOptions />
        <TeaserVideo />
        <Reviews />
        <SocialProof />
        <Journey />
      </AppShell.Main>
    </>
  );
};
