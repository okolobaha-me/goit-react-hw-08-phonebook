import { Center, Container } from '@chakra-ui/react';
import { Header } from '../Header/Header';
import { Outlet } from 'react-router';

export const Layout = () => {
  return (
    <Center bg="blue.900">
      <Container minH={'100vh'} maxW={'xl'}>
        <Header />
        <Outlet />
      </Container>
    </Center>
  );
};
