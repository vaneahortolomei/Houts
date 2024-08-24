import React from 'react';
import ErrorImg from '@/assets/404.png';
import { Container, Box, Image, Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

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
        <Image src={ErrorImg} maw={400} h={'auto'} />
        <Button
          mt={20}
          maw={100}
          w={'100%'}
          onClick={handleRedirect}
          variant="filled"
          color="#222027"
          styles={{
            label: {
              color: '#fff'
            }
          }}
        >
          Back
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
