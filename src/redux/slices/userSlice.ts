import { createSlice } from "@reduxjs/toolkit";

interface typeInitialState {
    toggleSignUp: boolean;
    currentName: string,
}

const initialState: typeInitialState = {
    toggleSignUp: false,
    currentName: '',
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUser(state, action){
            state.toggleSignUp = action.payload;
        },
        setCurrentName(state, action){
            state.currentName = action.payload;
        }
    }
})


export const { setUser,setCurrentName } = userSlice.actions;
export default userSlice.reducer;