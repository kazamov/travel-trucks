import { createSlice, createSelector } from '@reduxjs/toolkit';

import { fetchCampers, fetchCamper } from './campersOps';
import { selectNameFilter } from './filtersSlice';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  selectors: {
    selectCampers(state) {
      return state.items;
    },
    selectLoading(state) {
      return state.loading;
    },
    selectError(state) {
      return state.error;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCamper.pending, (state, action) => {
        state.items.push({ id: null, ...action.meta.arg });
        state.error = null;
      })
      .addCase(fetchCamper.fulfilled, (state, action) => {
        const newItemIndex = state.items.findIndex(
          item => item.name === action.payload.name && item.number === action.payload.number,
        );
        state.items[newItemIndex] = action.payload;
      })
      .addCase(fetchCamper.rejected, (state, action) => {
        const newItemIndex = state.items.findIndex(
          item => item.name === action.meta.arg.name && item.number === action.meta.arg.number,
        );
        state.items.splice(newItemIndex, 1);
        state.error = action.payload;
      });
  },
});

export const campersReducer = campersSlice.reducer;

export const { selectCampers, selectLoading, selectError } = campersSlice.selectors;

export const selectFilteredCampers = createSelector(
  selectCampers,
  selectNameFilter,
  (contacts, filter) => {
    if (!filter) {
      return contacts;
    }
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  },
);
