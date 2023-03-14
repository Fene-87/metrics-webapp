import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = '';

const initialState = {
  details: [],
  status: 'idle',
};

export const fetchDetails = createAsyncThunk('details/fetchDetails', async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchDetails.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchDetails.fulfilled, (state, { payload }) => {
        const keys = Object.keys(payload);
        const tempArray = [];
        keys.forEach((key) => {
          tempArray.push(payload[key]);
        });
        state.details = [...tempArray];
        state.status = 'loaded';
      })
      .addCase(fetchDetails.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: [...state.error, action.error.message],
      }));
  },
});

export default detailsSlice.reducer;
