import React from 'react'
import style from "./CreateProject.module.scss"
import { setOpenModal} from '../../redux/slices/modalSlice.ts';
import {useAppDispatch} from "../../redux/hook.ts";

const CreateProject: React.FC = () => {
    const dispatch = useAppDispatch();

    const openModal = ()=>{
        dispatch(setOpenModal(true));
    }

    return (
        <div className={style.wrapper}>
            <div className={style.main}>
                <p>У вас нет ни одного проекта</p>
                <button onClick={openModal}>Создать проект</button>
            </div>
        </div>
    )
}

export default CreateProject;