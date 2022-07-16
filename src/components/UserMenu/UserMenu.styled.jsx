import { Button } from '@chakra-ui/react';

export const Btn = ({ text, onClick }) => {
  return (
    <Button
      onClick={onClick}
      size={'small'}
      color={'blue.900'}
      p={'5px'}
      lineHeight={'0.9'}
    >
      {text}
    </Button>
  );
};
