import { InputWrapper } from './InputWrapper';
import { Input } from '@chakra-ui/react';
import React from 'react';

export const Email = ({ errorMessage, register }) => {
  return (
    <InputWrapper errorMessage={errorMessage} title={'Email'} htmlFor={'email'}>
      <Input
        color={'#ffffff'}
        id="email"
        type="text"
        placeholder="email"
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^\S+@\S+$/i,
            message: 'Please enter real email',
          },
        })}
      />
    </InputWrapper>
  );
};
