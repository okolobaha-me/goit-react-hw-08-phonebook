import { Heading } from '@chakra-ui/react';

export const NoContactsWarn = ({ children }) => {
  return (
    <Heading
      as="h2"
      size="lg"
      noOfLines={1}
      color={'white'}
      textAlign={'center'}
      mt={'10px'}
    >
      {children}
    </Heading>
  );
};
