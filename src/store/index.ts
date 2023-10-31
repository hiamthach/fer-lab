import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    // ...
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
