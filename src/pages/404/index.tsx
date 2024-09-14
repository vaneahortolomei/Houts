import React from 'react';
import Bag from '@/assets/Bags.png';
import { Container, Box, Image, Button, Text, Group } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useIsResponsive } from '@/hooks/use-is-responsive';
import styles from './404.module.scss';

const NotFound = () => {
  const navigate = useNavigate();
  const isResponsive = useIsResponsive(1024);

  const handleRedirect = () => {
    navigate('/');
  };

  return (
    <Container size="xl">
      <Box
        style={{
          backgroundColor: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100dvh',
          flexDirection: 'column'
        }}
      >
        <Group justify={'center'} style={{ position: 'relative' }}>
          <Text className={styles.text} fz={isResponsive ? 100 : 500} fw={900}>
            404
          </Text>
          <Image
            src={Bag}
            maw={600}
            h={'auto'}
            style={{ zIndex: 1 }}
            alt={'404'}
          />
          <Button
            mt={20}
            maw={200}
            w={'100%'}
            onClick={handleRedirect}
            variant="transparent"
            styles={{
              label: {
                color: '#222027',
                border: '2px solid  #222027',
                borderRadius: '17px',
                padding: '10px',
                textAlign: 'center',
                width: '130px',
                justifyContent: 'center'
              }
            }}
          >
            Back
          </Button>
        </Group>
      </Box>
    </Container>
  );
};

export default NotFound;
