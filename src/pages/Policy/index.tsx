import React from 'react';
import { Container, Text, Title, Box, List } from '@mantine/core';
import { useTranslation, Trans } from 'react-i18next';
import { useIsResponsive } from '@/hooks/use-is-responsive';

export const Policy = () => {
  const { t } = useTranslation();
  const isResponsive = useIsResponsive(1024);

  return (
    <Container maw={'1500px'}>
      <Box mb={100} mt={isResponsive ? 30 : 70}>
        <Title
          order={1}
          fz={isResponsive ? 30 : 50}
          mb={isResponsive ? 30 : 50}
        >
          {t('lang.pages.policyPage.title')}
        </Title>
        <Text mb={20}>{t('lang.pages.policyPage.text')}</Text>
        <Title fz={20} mb={30}>
          {t('lang.pages.policyPage.data.title')}
        </Title>
        <Text mb={20}>{t('lang.pages.policyPage.data.text')}</Text>
        <Title fz={20} mb={30}>
          {t('lang.pages.policyPage.collectData.title')}
        </Title>
        <Text mb={20}>{t('lang.pages.policyPage.collectData.text')}</Text>
        <Text mb={20}>{t('lang.pages.policyPage.collectData.text1')}</Text>
        <Title fz={20} mb={30}>
          {t('lang.pages.policyPage.useData.title')}
        </Title>
        <Text>{t('lang.pages.policyPage.useData.subtitle')}</Text>
        <List mb={20} p={'0 20px 0 0'}>
          <List.Item>{t('lang.pages.policyPage.useData.list.item')}</List.Item>
          <List.Item>{t('lang.pages.policyPage.useData.list.item1')}</List.Item>
          <List.Item>{t('lang.pages.policyPage.useData.list.item2')}</List.Item>
          <List.Item>{t('lang.pages.policyPage.useData.list.item3')}</List.Item>
          <List.Item>{t('lang.pages.policyPage.useData.list.item4')}</List.Item>
        </List>
        <Title fz={20} mb={30}>
          {t('lang.pages.policyPage.sharing.title')}
        </Title>
        <Text>{t('lang.pages.policyPage.sharing.subtitle')}</Text>
        <List mb={20} p={'0 20px 0 0'}>
          <List.Item>{t('lang.pages.policyPage.sharing.list.item')}</List.Item>
          <List.Item>{t('lang.pages.policyPage.sharing.list.item1')}</List.Item>
          <List.Item>{t('lang.pages.policyPage.sharing.list.item2')}</List.Item>
        </List>
        <Title fz={20} mb={30}>
          {t('lang.pages.policyPage.right.title')}
        </Title>
        <Text>{t('lang.pages.policyPage.right.subtitle')}</Text>
        <List mb={20} p={'0 20px 0 0'}>
          <List.Item>{t('lang.pages.policyPage.right.list.item')}</List.Item>
          <List.Item>{t('lang.pages.policyPage.right.list.item1')}</List.Item>
          <List.Item>{t('lang.pages.policyPage.right.list.item2')}</List.Item>
          <List.Item>{t('lang.pages.policyPage.right.list.item3')}</List.Item>
        </List>
        <Text mb={20}>{t('lang.pages.policyPage.right.footer')}</Text>
        <Title fz={20} mb={30}>
          {t('lang.pages.policyPage.dataSecurity.title')}
        </Title>
        <Text mb={20}>{t('lang.pages.policyPage.dataSecurity.text')}</Text>
        <Title fz={20} mb={30}>
          {t('lang.pages.policyPage.google.title')}
        </Title>
        <Text mb={20}>{t('lang.pages.policyPage.google.text')}</Text>
        <Text mb={20}>{t('lang.pages.policyPage.google.text2')}</Text>
        <Text mb={20}>{t('lang.pages.policyPage.google.text3')}</Text>
        <Text mb={20}>
          <Trans i18nKey="lang.pages.policyPage.google.text4">
            If you would like to prevent Google Analytics from using your data,
            you can install the
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </Trans>
        </Text>
        <Text mb={20}>
          <Trans i18nKey="lang.pages.policyPage.google.text5">
            For more information on how Google collects and processes data,
            please review
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google’s Privacy Policy
            </a>
            .
          </Trans>
        </Text>
        <Title fz={20} mb={30}>
          {t('lang.pages.policyPage.cookie.title')}
        </Title>
        <Text mb={20}>{t('lang.pages.policyPage.cookie.text')}</Text>
        <Text mb={20}>{t('lang.pages.policyPage.cookie.text1')}</Text>
        <Title fz={20} mb={30}>
          {t('lang.pages.policyPage.privacyProtection.title')}
        </Title>
        <Text mb={20}>{t('lang.pages.policyPage.privacyProtection.text')}</Text>
        <Title fz={20} mb={30}>
          {t('lang.pages.policyPage.changes.title')}
        </Title>
        <Text mb={20}>{t('lang.pages.policyPage.changes.text')}</Text>
        <Title fz={20} mb={30}>
          {t('lang.pages.policyPage.contact.title')}
        </Title>
        <Text mb={20}>{t('lang.pages.policyPage.contact.text')}</Text>
      </Box>
    </Container>
  );
};
