import React from 'react'
import style from "./Main.module.scss"
import MainNothing from './MainNothing'
import Card from '../Card/Card'

const Main: React.FC = () => {
  return (
    <div className={style.wrapper}>

      <div className={style.header}>
        <h1>NameProject</h1>

        <div className={style.filterImg}>
          <img width={20} src='../../public/filter.png' alt="filter" />
          <button className={style.addTask}>Add Task</button>
        </div>
      </div>


      <div className={style.card}>
        <Card />
        <Card />
        <Card />
      </div>

    </div>
  )
}

export default Main