import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice';
import modalSlice from './slices/modalSlice';
import taskSlice from './slices/taskSlice';

export const store = configureStore({
  reducer: {
    userSlice,
    modalSlice,
    taskSlice,
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;