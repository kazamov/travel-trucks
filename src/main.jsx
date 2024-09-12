import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PrimeReactProvider } from 'primereact/api';
import { PersistGate } from 'redux-persist/integration/react';

import 'modern-normalize';
import 'primereact/resources/themes/lara-light-cyan/theme.css';

import store, { persistor } from './store/store';

import './index.css';

import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimeReactProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </PrimeReactProvider>
  </StrictMode>,
);
