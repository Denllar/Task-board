import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice';
import modalSlice from './slices/modalSlice';

export const store = configureStore({
  reducer: {
    userSlice,
    modalSlice,
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;