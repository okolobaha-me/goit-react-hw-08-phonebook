import { List } from '@chakra-ui/react';

export const Contacts = ({ children }) => {
  return (
    <List color={'#ffffff'} p={'0 40px'}>
      {children}
    </List>
  );
};
