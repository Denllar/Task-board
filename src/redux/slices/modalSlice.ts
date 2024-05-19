import { createSlice } from "@reduxjs/toolkit";

interface typeInitialState {
    openModal: boolean,
    nameProj: string,
    descriptionProj: string,
}

const initialState: typeInitialState = {
    openModal: false,
    nameProj: '',
    descriptionProj: '',
}

const modalSlice = createSlice({
    name: 'modalSlice',
    initialState,
    reducers: {
        setOpenModal(state, action){
            state.openModal = action.payload;
        },
        setName(state, action){
            state.nameProj = action.payload;
        },
        setDescription(state, action){
            state.descriptionProj = action.payload;
        }
    }
})


export const { setOpenModal, setName, setDescription } = modalSlice.actions;
export default modalSlice.reducer;