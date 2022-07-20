import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../store/user/userSelectors';

export const PublicRoute = ({ children, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return <>{isLoggedIn ? <Navigate to={redirectTo} /> : children}</>;
};
