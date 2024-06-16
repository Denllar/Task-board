import React from 'react'
import style from "./Main.module.scss"
import {useAppSelector, useAppDispatch} from "../../redux/hook.ts";
import {setIsOpenTaskModal} from "../../redux/slices/taskSlice.ts"
import {setIsOpenSettingsModal} from "../../redux/slices/projectSettingsSlice.ts"
import DropDownTask from "../DropDownTask/DropDownTask.tsx";
import DropDownSettings from "../DropDownSettings/DropDownSettings.tsx";

const Main: React.FC = () => {
    const dispatch = useAppDispatch();
    const {nameProj} = useAppSelector(state => state.modalSlice);
    const { isOpenTaskModal } = useAppSelector(state => state.taskSlice);
    const { isOpenSettingsModal } = useAppSelector(state => state.projectSettingsSlice);


    const openSettingsAndCloseTaskModal = () => {
        dispatch(setIsOpenSettingsModal(true));
        dispatch(setIsOpenTaskModal(false));
    }

    const openTaskAndCloseSettingsModal = () => {
        dispatch(setIsOpenSettingsModal(false));
        dispatch(setIsOpenTaskModal(true));
    }

    return (
        <div className={style.wrapper}>

            <div className={style.header}>
                <h1>{nameProj}</h1>
                <div className={style.filterImg}>
                  <img onClick={openSettingsAndCloseTaskModal} width={20} src='../../public/filter.png' alt="filter" />
                  <button onClick={openTaskAndCloseSettingsModal} className={style.addTask}>Add Task</button>
                    {
                        isOpenTaskModal && <DropDownTask/> || isOpenSettingsModal && <DropDownSettings/>
                    }
                </div>

            </div>

            <div className={style.card}>

                <div className={style.track}>
                    <h3>Wating</h3>
                    <div>

                    </div>
                </div>

                <div className={style.track}>
                    <h3>Active</h3>
                    <div>

                    </div>
                </div>

                <div className={style.track}>
                    <h3>Canceled</h3>
                    <div>

                    </div>
                </div>

                <div className={style.track}>
                    <h3>Done</h3>
                    <div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Main