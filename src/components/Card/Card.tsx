import React from 'react'
import style from "./Card.module.scss"


const Card: React.FC = () => {
    const [count, setCount] = React.useState(0);
    return (
        <div className={style.wrapper}>
            <div>
                <div className={style.header}>
                    <h2>Web Task</h2>
                    <img width={20} src="../../public/ellipsis.png" alt="настройки" />
                </div>

                <p className={style.main}>Lorem ipsum dolor sit</p>

                <div className={style.progress}>
                    <progress onClick={()=>setCount(prev=>prev+7)} value={count} max="100" />
                    <p>{count}%</p>
                </div>

                <div className={style.footer}>
                    <p>Иконки</p>
                    <div className={style.clipMeassage}>
                        <div className={style.clip}>
                            <img width={10} src="../../public/clip.png" alt="закреплено" />
                            <p>3</p>
                        </div>
                        <div className={style.message}>
                            <img width={10} style={{ opacity: 0.6 }} src="../../public/message2.png" alt="сообщение" />
                            <p>5</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card