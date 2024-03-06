import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface typeInitialState { //типизация начального состояния (строка 7)
    count: number,
}

const initialState: typeInitialState = {
    count: 0,
}

const firstSlice = createSlice({
    name: 'firstSlice',
    initialState,
    reducers: {
        setCount(state, action: PayloadAction){
            state.count++;
        },
    }
})


export const { setCount } = firstSlice.actions;
export default firstSlice.reducer;