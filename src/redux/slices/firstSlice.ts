import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface typeInitialState { //типизация начального состояния (строка 7)
    count: number,
    isDigit: boolean,
}

const initialState: typeInitialState = {
    count: 0,
    isDigit: true,
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