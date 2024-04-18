import { AppShell, Container, Text } from '@mantine/core';
import React from 'react';

export const Main = () => {
  return (
    <>
      <AppShell.Main style={{ padding: 0 }}>
        <section style={{ height: '900px', background: 'red' }}>
          <Container size="lg">
            <Text>1</Text>
          </Container>
        </section>
        <section style={{ height: '900px', background: 'green' }}>2</section>
        <section style={{ height: '900px', background: 'yellow' }}>3</section>
        <section style={{ height: '900px', background: 'blue' }}>4</section>
        <section style={{ height: '900px', background: 'pink' }}>5</section>
        <section style={{ height: '900px', background: 'green' }}>6</section>
        <section style={{ height: '900px', background: 'yellow' }}>7</section>
        <section style={{ height: '900px', background: 'blue' }}>8</section>
        <section style={{ height: '900px', background: 'pink' }}>9</section>
        <section style={{ height: '900px', background: 'green' }}>10</section>
        <section style={{ height: '900px', background: 'yellow' }}>11</section>
        <section style={{ height: '900px', background: 'gray' }}>12</section>
        <section style={{ height: '900px', background: 'pink' }}>13</section>
        <section style={{ height: '900px', background: 'orange' }}>14</section>
        <section style={{ height: '900px', background: 'pink' }}>15</section>
      </AppShell.Main>
    </>
  );
};
