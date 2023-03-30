import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = '';

const initialState = {
  country: '',
  details: [],
  cities: [],
  cityCode: [],
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

export const fetchGeocode = createAsyncThunk('details/geoCode', async (name) => {
  try {
    const response = await axios.get(`http://api.positionstack.com/v1/forward?access_key=ede0e75c541abc2afd12831f355bedab&query=${name}`);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    updateCountry: (state, { payload }) => {
      state.country = payload;
    },
    updateCities: (state, { payload }) => {
      const keys = Object.keys(payload);
      const tempArray = [];
      keys.forEach((key) => {
        tempArray.push(payload[key]);
      });
      state.cities = [...tempArray];
    },
  },
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
      }))
      .addCase(fetchGeocode.fulfilled, (state, { payload }) => {
        const tempArray = [];
        console.log(payload.data);
      });
  },
});

export const { updateCities, updateCountry } = detailsSlice.actions;
export default detailsSlice.reducer;
