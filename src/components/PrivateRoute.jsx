import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../store/user/userSelectors';

export const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return <>{isLoggedIn ? children : <Navigate to={redirectTo} />}</>;
};
