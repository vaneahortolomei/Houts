import React from 'react';
import { Container, Text, Title, Box, List } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { useIsResponsive } from '@/hooks/use-is-responsive';

export const Terms = () => {
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
          {t('lang.pages.termsPage.title')}
        </Title>
        <Title fz={20} mb={30}>
          {t('lang.pages.termsPage.information.title')}
        </Title>
        <List mb={20} p={'0 20px 0 0'}>
          <List.Item>{t('lang.pages.termsPage.information.company')}</List.Item>
          <List.Item>{t('lang.pages.termsPage.information.owner')}</List.Item>
          <List.Item>
            {t('lang.pages.termsPage.information.legalForm')}
          </List.Item>
          <List.Item>{t('lang.pages.termsPage.information.office')}</List.Item>
        </List>
        <Title fz={20} mb={30}>
          {t('lang.pages.termsPage.contact.title')}
        </Title>
        <List mb={20} p={'0 20px 0 0'}>
          <List.Item>{t('lang.pages.termsPage.contact.phone')}</List.Item>
          <List.Item>{t('lang.pages.termsPage.contact.email')}</List.Item>
          <List.Item>{t('lang.pages.termsPage.contact.website')}</List.Item>
        </List>
        <Title fz={20} mb={30}>
          {t('lang.pages.termsPage.registration.title')}
        </Title>
        <List mb={20} p={'0 20px 0 0'}>
          <List.Item>{t('lang.pages.termsPage.registration.entry')}</List.Item>
          <List.Item>{t('lang.pages.termsPage.registration.court')}</List.Item>
          <List.Item>{t('lang.pages.termsPage.registration.number')}</List.Item>
        </List>
        <Title fz={20} mb={30}>
          {t('lang.pages.termsPage.id')}
        </Title>
        <Title fz={20} mb={30}>
          {t('lang.pages.termsPage.dispute.title')}
        </Title>
        <Text mb={20}>{t('lang.pages.termsPage.dispute.text')}</Text>
        <Title fz={20} mb={30}>
          {t('lang.pages.termsPage.liabilityForContent.title')}
        </Title>
        <Text mb={20}>
          {t('lang.pages.termsPage.liabilityForContent.text')}
        </Text>
        <Title fz={20} mb={30}>
          {t('lang.pages.termsPage.liabilityForLinks.title')}
        </Title>
        <Text mb={20}>{t('lang.pages.termsPage.liabilityForLinks.text')}</Text>
        <Title fz={20} mb={30}>
          {t('lang.pages.termsPage.copyright.title')}
        </Title>
        <Text mb={20}>{t('lang.pages.termsPage.copyright.text')}</Text>
      </Box>
    </Container>
  );
};
