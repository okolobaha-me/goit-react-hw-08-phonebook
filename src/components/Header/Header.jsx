import {Head} from './Header.styled';
import {Heading, Spinner} from '@chakra-ui/react';
import {LoginMenu} from '../LoginMenu/LoginMenu';
import {useSelector} from 'react-redux';
import {getIsLoggedIn} from '../../store/user/userSelectors';
import {UserMenu} from '../UserMenu/UserMenu';
import {getIsRefreshing} from '../../store/loadingStatus/loadingStatusSelectors';

export const Header = () => {
  const isRefreshing = useSelector(getIsRefreshing);
  const isLoggedIn = useSelector(getIsLoggedIn);

  const getContent = () => {
    if (isRefreshing) return <Spinner size={'sm'} />;

    if (isLoggedIn) return <UserMenu />;

    return <LoginMenu />;
  };

  return (
    <Head>
      <Heading as={'h1'} size={'md'}>
        Phonebook
      </Heading>
      {getContent()}
    </Head>
  );
};
