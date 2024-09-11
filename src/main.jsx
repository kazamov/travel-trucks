import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PrimeReactProvider } from 'primereact/api';

import 'modern-normalize';
import 'primereact/resources/themes/lara-light-cyan/theme.css';

import './index.css';

import App from './App';
import store from './store/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimeReactProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </PrimeReactProvider>
  </StrictMode>,
);
