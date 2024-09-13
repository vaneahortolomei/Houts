import { useState, useEffect } from 'react';
import { Dialog, Button, Text, Flex } from '@mantine/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const CookieConsentBanner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    loadGoogleAnalytics();
    setIsOpen(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsOpen(false);
  };

  const loadGoogleAnalytics = () => {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-63FE6MW790';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];

      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      gtag('js', new Date());
      gtag('config', 'G-63FE6MW790');
    };
  };

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsOpen(true);
    }
  }, []);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'accepted') {
      loadGoogleAnalytics();
    }
  }, []);

  return (
    <Dialog
      opened={isOpen}
      position={{ bottom: 20, left: 20 }}
      size="lg"
      radius="md"
      style={{
        backgroundColor: '#000',
        color: '#fff'
      }}
    >
      <Text size="16px" mb="xs" fw={500}>
        {t('lang.cookie.text')}
      </Text>
      <Flex justify="flex-start" gap={'10px'}>
        <Button variant="white" onClick={handleAccept}>
          {t('lang.cookie.accept')}
        </Button>
        <Button variant="white" onClick={handleDecline}>
          {t('lang.cookie.decline')}
        </Button>
      </Flex>
    </Dialog>
  );
};

export default CookieConsentBanner;
