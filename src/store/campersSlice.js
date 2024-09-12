import { createSlice, createSelector } from '@reduxjs/toolkit';

import { fetchCampers, fetchCamper } from './campersOps';
import { selectFilters } from './filtersSlice';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    favorites: [],
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
    selectFavorites(state) {
      return state.favorites;
    },
  },
  reducers: {
    addToFavorites(state, action) {
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    },
    removeFromFavorites(state, action) {
      return {
        ...state,
        favorites: state.favorites.filter(favoriteId => favoriteId !== action.payload),
      };
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
      .addCase(fetchCamper.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCamper.fulfilled, (state, action) => {
        if (!state.items) {
          state.items = [];
        }
        const camperIndex = state.items.findIndex(camper => camper.id === action.payload.id);
        if (camperIndex !== -1) {
          state.items[camperIndex] = action.payload;
        } else {
          state.items.push(action.payload);
        }
        state.loading = false;
      })
      .addCase(fetchCamper.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addToFavorites, removeFromFavorites } = campersSlice.actions;

export const campersReducer = campersSlice.reducer;

export const { selectCampers, selectLoading, selectError, selectTotal, selectFavorites } =
  campersSlice.selectors;

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

export const selectCamperById = id => {
  return createSelector(selectCampers, campers => campers?.find(camper => camper.id === id));
};

export const selectIsFavorite = id => {
  return createSelector(selectFavorites, favorites => favorites.includes(id));
};
