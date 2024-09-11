import { createSlice, createSelector } from '@reduxjs/toolkit';

import { fetchCampers, fetchCamper } from './campersOps';
import { selectFilters } from './filtersSlice';

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
        state.items = action.payload.items;
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

export const { selectCampers, selectLoading, selectError, selectTotal } = campersSlice.selectors;

export const selectFilteredCampers = createSelector(
  selectCampers,
  selectFilters,
  (campers, filters) => {
    if (!filters.city && !filters.equipments.length && !filters.form) {
      return campers;
    }

    return campers.filter(camper => {
      if (filters.city && !camper.location.toLowerCase().includes(filters.city.toLowerCase())) {
        return false;
      }
      if (
        filters.equipments.length &&
        !filters.equipments.every(equipment => camper[equipment.key] === equipment.value)
      ) {
        return false;
      }
      if (filters.form && camper.form.toLowerCase() !== filters.form.toLowerCase()) {
        return false;
      }
      return true;
    });
  },
);
