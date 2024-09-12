import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createTransform } from 'redux-persist';

import { campersReducer } from './campersSlice';
import { filtersReducer } from './filtersSlice';

const rootReducer = combineReducers({
  campers: campersReducer,
  filters: filtersReducer,
});

const saveFavorites = createTransform(
  inboundState => {
    return { favorites: inboundState.favorites };
  },
  outboundState => {
    return outboundState;
  },
  { whitelist: ['campers'] },
);

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['campers'],
  transforms: [saveFavorites],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
