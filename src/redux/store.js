import { configureStore } from '@reduxjs/toolkit';
import continentsSlice from './features/continentsSlice';

const store = configureStore({
  reducer: {
    continents: continentsSlice,
  },
});

export default store;
