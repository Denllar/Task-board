import { createSlice } from "@reduxjs/toolkit";

interface typeInitialState {
    toggleSignUp: boolean;
}

const initialState: typeInitialState = {
    toggleSignUp: false,
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUser(state){
            state.toggleSignUp = !state.toggleSignUp;
        },
    }
})


export const { setUser } = userSlice.actions;
export default userSlice.reducer;