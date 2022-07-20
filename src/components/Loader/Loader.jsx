import { Center, Spinner } from '@chakra-ui/react';

export const Loader = ({ size }) => {
  return (
    <Center w={'100%'} h={'20vh'}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size={size}
      />
    </Center>
  );
};
