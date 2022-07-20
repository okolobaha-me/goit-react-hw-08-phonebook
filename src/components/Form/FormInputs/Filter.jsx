import { Box, Input } from '@chakra-ui/react';
import { InputWrapper } from './InputWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../../store/filter/filtersSelectors';
import { setFilter } from '../../../store/filter/filterSlice';

export const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <Box mb={'20px'} p={'0 40px'}>
      <InputWrapper htmlFor={'name'} title={'Filter'}>
        <Input
          color={'#ffffff'}
          id="filter"
          type="text"
          placeholder="Whom are you looking for"
          value={value}
          onChange={handleChange}
        />
      </InputWrapper>
    </Box>
  );
};
