import React from 'react'
import style from "./Home.module.scss"

import RightBar from '../../components/RightBar/RightBar';
import Main from '../../components/Main/Main';

const Home: React.FC = () => {
    return (
        <div className={style.wrapper}>

            <main className={style.main}>
                <Main/>
                <RightBar/>
            </main>
        </div>
    )
}

export default Home;