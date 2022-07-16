import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import React from 'react';

export const InputWrapper = ({ htmlFor, title, errorMessage, children }) => {
  return (
    <FormControl isInvalid={!!errorMessage}>
      <FormLabel htmlFor={htmlFor} color={'#ffffff'}>
        {title}
      </FormLabel>
      {children}
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
};
