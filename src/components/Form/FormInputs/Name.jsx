import { Input } from '@chakra-ui/react';
import React from 'react';
import { InputWrapper } from './InputWrapper';

export const Name = ({ register, errorMessage = false }) => {
  return (
    <InputWrapper errorMessage={errorMessage} htmlFor={'name'} title={'Name'}>
      <Input
        color={'#ffffff'}
        id="name"
        type="text"
        placeholder="name"
        {...register('name', { required: 'Name is required' })}
      />
    </InputWrapper>
  );
};
