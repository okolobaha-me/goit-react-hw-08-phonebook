import { Button, Flex, Heading, ListItem } from '@chakra-ui/react';
import { AiOutlineDelete } from 'react-icons/ai';

export const Name = ({ children }) => {
  return (
    <Heading size={'md'} mb={'5px'}>
      {children}
    </Heading>
  );
};

export const Item = ({ children }) => {
  return (
    <ListItem borderBottom={'1px solid white'} pb={'5px'} mb={'10px'}>
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        {children}
      </Flex>
    </ListItem>
  );
};

export const DeleteButton = ({ onclick, isDisabled }) => {
  return (
    <Button
      colorScheme={'red'}
      backgroundColor={'#ae0000'}
      size={'md'}
      p={'1px'}
      onClick={onclick}
      disabled={isDisabled}
    >
      <AiOutlineDelete color={'white'} size={'1.7em'} />
    </Button>
  );
};
