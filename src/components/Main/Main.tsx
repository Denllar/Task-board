import React from 'react'
import style from "./Main.module.scss"
import {useAppSelector, useAppDispatch} from "../../redux/hook.ts";
import {setOpenModal} from "../../redux/slices/taskSlice.ts"

const Main: React.FC = () => {
    const dispatch = useAppDispatch();
    const {nameProj} = useAppSelector(state => state.modalSlice);

    return (
        <div className={style.wrapper}>

          <div className={style.header}>
            <h1>{nameProj}</h1>
            <div className={style.filterImg}>
              <img width={20} src='../../public/filter.png' alt="filter" />
              <button onClick={() => dispatch(setOpenModal(true))} className={style.addTask}>Add Task</button>
            </div>
          </div>

            <div className={style.card}>
                {/*{*/}
                {/*  [...Array(addCard)].map((_, index) => <Card key={index} /> )*/}
                {/*}*/}

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