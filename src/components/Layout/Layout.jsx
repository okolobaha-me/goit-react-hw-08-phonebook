import {Center, Container} from '@chakra-ui/react';
import {Header} from '../Header/Header';
import {Outlet} from 'react-router';
import {useSelector} from 'react-redux';
import {getIsRefreshing} from '../../store/loadingStatus/loadingStatusSelectors';
import {Loader} from '../Loader/Loader';

export const Layout = () => {
  const isRefreshing = useSelector(getIsRefreshing);

  return (
    <Center bg="blue.900">
      <Container minH={'100vh'} maxW={'xl'}>
        <Header />
        {isRefreshing ? <Loader size={'xl'} /> : <Outlet />}
      </Container>
    </Center>
  );
};
