import { AppShell } from '@mantine/core';
import React from 'react';
import { IndexPage } from '@/pages/Main';
import { Routes, Route } from 'react-router-dom';
import { Policy } from '@/pages/Policy';
import { Terms } from '@/pages/Terms';
import NotFound from '@/pages/404';

export const Main = () => {
  return (
    <>
      <AppShell.Main style={{ padding: 0 }}>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppShell.Main>
    </>
  );
};
