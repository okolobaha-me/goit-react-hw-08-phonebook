import { Flex } from '@chakra-ui/react';

export const Head = ({ children }) => {
  return (
    <Flex
      as={'header'}
      p={'15px'}
      borderBottom={'1px solid white'}
      color={'white'}
      justifyContent={'space-between'}
    >
      {children}
    </Flex>
  );
};
