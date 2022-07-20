import { Box, Button, Flex } from '@chakra-ui/react';

export const FormWrapper = ({
  children,
  handleSubmit,
  buttonText = 'Sign Up',
}) => {
  return (
    <Box p={'15px 40px'}>
      <form onSubmit={handleSubmit}>
        {children}
        <Flex justifyContent={'center'} p={'20px'}>
          <Button type="submit">{buttonText}</Button>
        </Flex>
      </form>
    </Box>
  );
};
