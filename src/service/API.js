import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const tokenOptions = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signUpUser = data =>
  axios({ method: 'post', url: '/users/signup', data });

export const logInUser = data =>
  axios({ method: 'post', url: '/users/login', data });

export const logOutUser = () => axios({ method: 'post', url: '/users/logout' });

export const refreshUser = () =>
  axios({ method: 'get', url: '/users/current' });
