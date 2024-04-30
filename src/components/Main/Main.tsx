import React from 'react'
import style from "./Main.module.scss"
import Card from '../Card/Card'

const Main: React.FC = () => {
  const [addCard, setAddCard] = React.useState(0)
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <h1>NameProject</h1>
        <div className={style.filterImg}>
          <img width={20} src='../../public/filter.png' alt="filter" />
          <button onClick={() => setAddCard(prev => prev + 1)} className={style.addTask}>Add Task</button>
        </div>
      </div>
      <div className={style.card}>
        {
          [...Array(addCard)].map((_, index) => <Card key={index} /> )
        }
      </div>
    </div>
  )
}

export default Main