import React from "react"
import style from "./TaskModal.module.scss"

import {useAppDispatch, useAppSelector} from "../../redux/hook.ts";
import { setOpenModal, setNameTask, setDescriptionTask } from "../../redux/slices/taskSlice.ts";
import axios from "axios";

const TaskModal: React.FC = () => {
    const dispatch = useAppDispatch();
    const {nameTask, descriptionTask} = useAppSelector(state => state.taskSlice);
    const {userId} = useAppSelector(state => state.userSlice);

    const enterAndCreateTask = async () => {
        try {
            const {data} = await axios.post("https://d2e35694418f58f2.mokky.dev/tasks", {
                user_id: userId,
                name: nameTask,
                description: descriptionTask,
            });
            console.log(data);
        } catch (err){
            alert(`Ошибка при создании задачи: ${err}`);
        }
    }

    return (
        <div className={style.modal} onClick={() => dispatch(setOpenModal(false))}>
            <div className={style.modal__content} onClick={(e) => e.stopPropagation()}>
                <div>
                    <div>
                        <h3>Название задачи</h3>
                        <input onChange={event => dispatch(setNameTask(event.target.value))}
                               placeholder={"Введите название"}/>
                    </div>
                    <div>
                        <h3>Описание задачи</h3>
                        <input onChange={event => dispatch(setDescriptionTask(event.target.value))}
                               placeholder={"Введите описание"}/>
                    </div>
                </div>
                <button onClick={enterAndCreateTask}>Создать</button>
            </div>
        </div>
    )
}

export default TaskModal;