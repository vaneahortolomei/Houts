import React from 'react';
import { AppShell, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';

export const BaseTemplate = () => {
  const { t } = useTranslation();
  return (
    <>
      <AppShell>
        <Text>{t('lang.text2')}</Text>
      </AppShell>
    </>
  );
};
