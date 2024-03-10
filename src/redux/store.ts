import { configureStore } from '@reduxjs/toolkit'
import firstSlice from './slices/firstSlice';

export const store = configureStore({
  reducer: {
    firstSlice,
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;