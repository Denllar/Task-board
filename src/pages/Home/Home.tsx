import React from 'react'
import style from "./Home.module.scss"

import RightBar from '../../components/RightBar/RightBar';
import Main from '../../components/Main/Main';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import Modal from "../../components/CreateProject/Modal.tsx";
import {useAppSelector} from "../../redux/hook.ts";

const Home: React.FC = () => {
    const {openModal} = useAppSelector(state => state.modalSlice);
    const {toggleCreateProject} = useAppSelector(state => state.userSlice);
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
                openModal && <Modal/>
            }
        </div>
    )
}

export default Home;