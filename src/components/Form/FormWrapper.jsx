import { Box, Button, Flex } from '@chakra-ui/react';

export const FormWrapper = ({ children, handleSubmit }) => {
  return (
    <Box p={'15px 40px'}>
      <form onSubmit={handleSubmit}>
        {children}
        <Flex justifyContent={'center'} p={'20px'}>
          <Button type="submit">Sign Up</Button>
        </Flex>
      </form>
    </Box>
  );
};
