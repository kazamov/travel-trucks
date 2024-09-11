import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    city: '',
    equipments: [],
    form: '',
  },
  selectors: {
    selectFilters(state) {
      return state;
    },
  },
  reducers: {
    changeFilter(state, action) {
      state.city = action.payload.city;
      state.equipments = action.payload.equipments;
      state.form = action.payload.form;
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export const filtersReducer = filterSlice.reducer;

export const { selectFilters } = filterSlice.selectors;
