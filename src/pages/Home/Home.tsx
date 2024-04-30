import React from 'react'
import style from "./Home.module.scss"

import RightBar from '../../components/RightBar/RightBar';
import Main from '../../components/Main/Main';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';

const Home: React.FC = () => {
    return (
        <div className={style.wrapper}>
            <Navigation />
            <main className={style.home}>
                <Header />

                <div className={style.main}>
                    <Main />
                    <RightBar />
                </div>
            </main>
        </div>
    )
}

export default Home;