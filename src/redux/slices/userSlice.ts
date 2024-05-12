import { createSlice } from "@reduxjs/toolkit";

interface typeInitialState {
    toggleSignUp: boolean;
    currentName: string,
    currentEmail: string,
}

const initialState: typeInitialState = {
    toggleSignUp: false,
    currentName: '',
    currentEmail: '',
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
        },
        setCurrentEmail(state, action){
            state.currentEmail = action.payload;
        },
    }
})


export const { setUser,setCurrentName, setCurrentEmail } = userSlice.actions;
export default userSlice.reducer;