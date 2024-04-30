import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice';

export const store = configureStore({
  reducer: {
    userSlice,
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;