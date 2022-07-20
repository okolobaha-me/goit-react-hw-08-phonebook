import {Navigate, Route, Routes} from 'react-router';
import {Layout} from './Layout/Layout';
import {SignUp} from '../Pages/SignUp/SignUp';
import {LogIn} from '../Pages/LogIn/LogIn';
import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getIsLoggedIn, getUserToken} from '../store/user/userSelectors';
import {tokenOptions} from '../service/API';
import {refresh} from '../store/user/userActions';
import {PublicRoute} from './PublicRoute';
import {PrivateRoute} from './PrivateRoute';
import {Contacts} from '../Pages/Contacts/Contacts';

export const App = () => {
  const isFirstLoad = useRef(true);

  const isLoggedIn = useSelector(getIsLoggedIn);
  const token = useSelector(getUserToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isFirstLoad.current) return;
    isFirstLoad.current = false;

    if (token) {
      tokenOptions.set(token);
      dispatch(refresh());
    }
  }, [dispatch, token]);

  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route
          index
          element={<Navigate to={isLoggedIn ? 'contacts' : 'logIn'} />}
        />
        <Route
          path={'logIn'}
          element={
            <PublicRoute redirectTo={'/contacts'}>
              <LogIn />
            </PublicRoute>
          }
        />
        <Route
          path={'signUp'}
          element={
            <PublicRoute redirectTo={'/contacts'}>
              <SignUp />
            </PublicRoute>
          }
        />
        <Route
          path={'contacts'}
          element={
            <PrivateRoute redirectTo={'/logIn'}>
              <Contacts />
            </PrivateRoute>
          }
        />
        <Route
          path={'*'}
          element={<Navigate to={isLoggedIn ? 'contacts' : 'logIn'} />}
        />
      </Route>
    </Routes>
  );
};
