import React from 'react'
import style from "./CreateProject.module.scss"
import {setOpenModal} from '../../redux/slices/modalSlice.ts';
import {useAppDispatch} from "../../redux/hook.ts";

const CreateProject: React.FC = () => {
    const dispatch = useAppDispatch();

    return (
        <div className={style.wrapper}>
            <div className={style.main}>
                {/*<img width={100} src={"../../../public/project.png"} alt={"create-project"}/>*/}
                <p>У вас нет ни одного проекта</p>
                <button onClick={() => dispatch(setOpenModal(true))}>Создать проект</button>
            </div>
        </div>
    )
}

export default CreateProject;