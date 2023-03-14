import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://countriesnow.space/api/v0.1/countries';

const initialState = {
  continents: [],
  status: 'idle',
};

export const fetchCountries = createAsyncThunk('continents/fetchCountries', async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data.data;
  } catch (error) {
    return error.message;
  }
});

const continentsSlice = createSlice({
  name: 'continents',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchCountries.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchCountries.fulfilled, (state, { payload }) => {
        const keys = Object.keys(payload);
        const tempArray = [];
        keys.forEach((key) => {
          tempArray.push(payload[key]);
        });
        state.continents = [...tempArray];
        state.status = 'loaded';
      })
      .addCase(fetchCountries.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: [...state.error, action.error.message],
      }));
  },
});

export default continentsSlice.reducer;
