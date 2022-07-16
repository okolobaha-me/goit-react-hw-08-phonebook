import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ChakraProvider>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename={'react-homework-template'}>
          <App />
        </BrowserRouter>
      </PersistGate>
    </ChakraProvider>
  </Provider>
);
