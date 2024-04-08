import React from 'react';
import { useTranslation } from 'react-i18next';
import { AppShell, Text } from '@mantine/core';

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
