import { configureStore } from '@reduxjs/toolkit';
import continentsSlice from './features/continentsSlice';
import detailsSlice from './features/detailsSlice';

const store = configureStore({
  reducer: {
    continents: continentsSlice,
    details: detailsSlice,
  },
});

export default store;
