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
        setNameProj(state, action){
            state.nameProj = action.payload;
        },
        setDescriptionProj(state, action){
            state.descriptionProj = action.payload;
        }
    }
})


export const { setOpenModal, setNameProj, setDescriptionProj } = modalSlice.actions;
export default modalSlice.reducer;