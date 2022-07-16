import { Route, Routes } from 'react-router';
import { Layout } from './Layout/Layout';
import { SignUp } from '../Pages/SignUp/SignUp';
import { LogIn } from '../Pages/LogIn/LogIn';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserToken } from '../store/user/userSelectors';
import { tokenOptions } from '../service/API';
import { refresh } from '../store/user/userActions';

export const App = () => {
  const isFirstLoad = useRef(true);

  const token = useSelector(getUserToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isFirstLoad.current) return;
    isFirstLoad.current = false;

    if (token) {
      tokenOptions.set(token);
      dispatch(refresh());
    }
  }, []);

  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route path={'signUp'} element={<SignUp />} />
        <Route path={'logIn'} element={<LogIn />} />
      </Route>
    </Routes>
  );
};
