import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { userSlice } from './user/userSlice';
import { contactsSlice } from './contacts/contactsSlice';
import { filterSlice } from './filter/filterSlice';
import { loadingStatusSlice } from './loadingStatus/logonStatusSlice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(contactsSlice.middleware),
];

const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: 'token',
};

export const store = configureStore({
  reducer: {
    user: persistReducer(userPersistConfig, userSlice.reducer),
    [contactsSlice.reducerPath]: contactsSlice.reducer,
    filter: filterSlice.reducer,
    loadingStatus: loadingStatusSlice.reducer,
  },
  middleware,
});

export const persistor = persistStore(store);
