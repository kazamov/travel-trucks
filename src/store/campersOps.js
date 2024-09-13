import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const fetchCampers = createAsyncThunk('campers/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/campers?page=1&limit=100');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchCamper = createAsyncThunk('contacts/fetchCamperById', async (id, thunkAPI) => {
  try {
    const response = await axios.get(`/campers/${id}`);
    return response.data;
  } catch (error) {
    if (error.status === 404) {
      return thunkAPI.rejectWithValue('Camper you are looking for is not found');
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});
