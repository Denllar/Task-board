import React from 'react'
import style from "./Home.module.scss"
import RightBar from '../../components/RightBar/RightBar';
import Main from '../../components/Main/Main';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import Modal from "../../components/CreateProject/Modal.tsx";
import TaskModal from "../../components/TaskModal/TaskModal.tsx";
import {useAppDispatch, useAppSelector} from "../../redux/hook.ts";
import { setCurrentProjectId} from "../../redux/slices/userSlice.ts";
import {setNameProj, setDescriptionProj} from "../../redux/slices/modalSlice.ts";

import axios from "axios";

const Home: React.FC = () => {
    const { openModal } = useAppSelector(state => state.modalSlice);
    const { openTaskModal } = useAppSelector(state => state.taskSlice);
    const { toggleCreateProject, userId } = useAppSelector(state => state.userSlice);
    const dispatch = useAppDispatch();

    React.useEffect(()=>{
        try {
            (async () => {
                const {data} = await axios(`https://d2e35694418f58f2.mokky.dev/users/${userId}`)
                dispatch(setCurrentProjectId(data.currentProjectId));
                const dataProj = await axios(`https://d2e35694418f58f2.mokky.dev/projects/${data.currentProjectId}`);
                dispatch(setNameProj(dataProj.data.name));
                dispatch(setDescriptionProj(dataProj.data.description));
            })();
        } catch (err){
            console.error(err);
        }
    }, [openModal]);

    return (
        <div className={style.wrapper}>
            <Navigation />
            <main className={style.home}>
                <Header/>
                {
                    !toggleCreateProject &&
                    <div className={style.main}>
                        <Main/>
                        <RightBar/>
                    </div>
                }

            </main>
            {
                openModal && <Modal/> || openTaskModal && <TaskModal/>
            }

        </div>
    )
}

export default Home;