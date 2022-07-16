import { Flex } from '@chakra-ui/react';
import { StyledLink } from './LoginMenu.styled';

export const LoginMenu = () => {
  return (
    <Flex>
      <StyledLink to={'/login'}>Log In</StyledLink>
      <StyledLink to={'/signUp'}>Sign Up</StyledLink>
    </Flex>
  );
};
