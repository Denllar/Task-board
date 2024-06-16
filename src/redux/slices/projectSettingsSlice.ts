import { createSlice} from "@reduxjs/toolkit";

interface typeInitialState {
    isOpenSettingsModal: boolean,
}

const initialState: typeInitialState = {
    isOpenSettingsModal: false,
}

const projectSettingsSlice = createSlice({
    name: 'projectSettingsSlice',
    initialState,
    reducers: {
        setIsOpenSettingsModal(state, action){
            state.isOpenSettingsModal = action.payload;
        },
    }
})


export const { setIsOpenSettingsModal } = projectSettingsSlice.actions;
export default projectSettingsSlice.reducer;