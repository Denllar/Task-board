import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type trackType = {
    id: number,
    name: string;
    description: string;
    project_id: number,
    user_id: number,
}

enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasksStatus',
    async () => {
        const { data } = await axios.get<trackType[]>(`https://d2e35694418f58f2.mokky.dev/tasks`);
        return data;
    }
)


interface typeInitialState {
    isOpenTaskModal: boolean,
    nameTask: string,
    descriptionTask: string,
    status: 'loading' | 'success' | 'error',
    watingTrack: trackType[],
    activeTrack: trackType[],
    canceledTrack: trackType[],
    doneTrack: trackType[],
}

const initialState: typeInitialState = {
    isOpenTaskModal: false,
    nameTask: '',
    descriptionTask: '',
    status: Status.LOADING,
    watingTrack: [],
    activeTrack: [],
    canceledTrack: [],
    doneTrack: [],
}

const taskSlice = createSlice({
    name: 'taskSlice',
    initialState,
    reducers: {
        setIsOpenTaskModal(state, action){
            state.isOpenTaskModal = action.payload;
        },
        setNameTask(state, action){
            state.nameTask = action.payload;
        },
        setDescriptionTask(state, action){
            state.descriptionTask = action.payload;
        }
    },
    extraReducers: (builder) => {
            builder.addCase(fetchTasks.pending, (state) => {
                state.status = Status.LOADING;
            }),
            builder.addCase(fetchTasks.fulfilled, (state, action) => {
                state.status = Status.SUCCESS;
                state.watingTrack = action.payload;
            }),
            builder.addCase(fetchTasks.rejected, (state) => {
                state.status = Status.ERROR;
            })
    }
})


export const { setIsOpenTaskModal, setNameTask, setDescriptionTask } = taskSlice.actions;
export default taskSlice.reducer;