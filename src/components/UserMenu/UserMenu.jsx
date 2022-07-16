import { Flex } from '@chakra-ui/react';
import { Btn } from './UserMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from '../../store/user/userSelectors';
import { logOut } from '../../store/user/userActions';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const userName = useSelector(getUserName);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Flex gap={'10px'}>
      <p>
        Hello <span>{userName}</span>
      </p>{' '}
      <Btn text={'Log Out'} onClick={handleLogOut} />
    </Flex>
  );
};
