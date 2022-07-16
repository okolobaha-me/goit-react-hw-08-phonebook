import { InputWrapper } from './InputWrapper';
import { Input } from '@chakra-ui/react';
import React from 'react';

export const Password = ({ errorMessage, register }) => {
  return (
    <InputWrapper errorMessage={errorMessage} htmlFor={'as'} title={'Password'}>
      {' '}
      <Input
        color={'#ffffff'}
        id="as"
        type="password"
        placeholder="password"
        {...register('password', {
          required: 'Password is required',
          minLength: {
            value: 7,
            message: 'Password should have least 7 symbols',
          },
        })}
      />
    </InputWrapper>
  );
};
