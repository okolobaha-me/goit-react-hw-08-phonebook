import { Box } from '@chakra-ui/react';

export const Head = ({ children }) => {
  return (
    <Box as={'header'} bgColor={'red'}>
      {children}
    </Box>
  );
};
