import { Input } from '@chakra-ui/react';
import React from 'react';
import { InputWrapper } from './InputWrapper';

export const Number = ({ register, errorMessage = false }) => {
  return (
    <InputWrapper
      errorMessage={errorMessage}
      htmlFor={'number'}
      title={'Number'}
    >
      <Input
        color={'#ffffff'}
        id="number"
        type="tel"
        placeholder="phone number"
        {...register('number', {
          required: 'Phone number is required',
        })}
      />
    </InputWrapper>
  );
};

//+380(67)-995-33-65
