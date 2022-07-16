import { Head } from './Header.styled';
import { Heading } from '@chakra-ui/react';
import { LoginMenu } from '../LoginMenu/LoginMenu';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../store/user/userSelectors';
import { UserMenu } from '../UserMenu/UserMenu';

export const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Head>
      <Heading as={'h1'} size={'md'}>
        Phonebook
      </Heading>
      {isLoggedIn ? <UserMenu /> : <LoginMenu />}
    </Head>
  );
};
