import { createSlice } from "@reduxjs/toolkit";


interface typeInitialState {
    toggleSignUp: boolean;
    toggleCreateProject: boolean,
    openProj: null | number,
    userId: number | null,
    currentName: string,
    currentEmail: string,
}

const initialState: typeInitialState = {
    toggleSignUp: false,
    toggleCreateProject: true,
    openProj: null,
    userId: null,
    currentName: '',
    currentEmail: '',
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setToggleSignUp(state, action){
            state.toggleSignUp = action.payload;
        },
        setToggleCreateProject(state, action){
            state.toggleCreateProject = action.payload;
        },
        setOpenProj(state, action){
            state.openProj = action.payload;
        },
        setUserId(state, action){
            state.userId = action.payload;
        },
        setCurrentName(state, action){
            state.currentName = action.payload;
        },
        setCurrentEmail(state, action){
            state.currentEmail = action.payload;
        },
    }
})


export const { setToggleSignUp, setToggleCreateProject, setOpenProj, setUserId, setCurrentName, setCurrentEmail } = userSlice.actions;
export default userSlice.reducer;