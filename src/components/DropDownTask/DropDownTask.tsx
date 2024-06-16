import React from "react"
import axios from "axios";
import {setDescriptionTask, setNameTask, setIsOpenTaskModal} from "../../redux/slices/taskSlice.ts";
import {useAppDispatch, useAppSelector} from "../../redux/hook.ts";
import style from "./DropDownTask.module.scss";

const DropDownTask: React.FC = () => {
    const dispatch = useAppDispatch();
    const {nameTask, descriptionTask} = useAppSelector(state => state.taskSlice);
    const {userId} = useAppSelector(state => state.userSlice);

    const enterAndCreateTask = async () => {
        try {
            await axios.post("https://d2e35694418f58f2.mokky.dev/tasks", {
                user_id: userId,
                name: nameTask,
                description: descriptionTask,
            });
            dispatch(setIsOpenTaskModal(false));
        } catch (err){
            alert(`Ошибка при создании задачи: ${err}`);
        }
    }

    return (
        <div className={style.modal__content}>
            <p onClick={()=>dispatch(setIsOpenTaskModal(false))}>X</p>
            <div>
                <div>
                    <h3>Название задачи</h3>
                    <input onChange={event => dispatch(setNameTask(event.target.value))} placeholder={"Введите название"}/>
                </div>
                <div>
                    <h3>Описание задачи</h3>
                    <input onChange={event => dispatch(setDescriptionTask(event.target.value))} placeholder={"Введите описание"}/>
                </div>
                <div>
                    <h3>Кто выполнит задание?</h3>
                    <input placeholder={"Поиск"}/>
                </div>
            </div>
            <button onClick={enterAndCreateTask}>Создать</button>
        </div>
    )
}

export default DropDownTask;