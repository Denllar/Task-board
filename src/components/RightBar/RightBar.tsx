import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import style from './RightBar.module.scss'

const RightBar: React.FC = () => {
    const percentage = 77;
    return (
        <div className={style.wrapper}>
            <div className={style.main}>
                <div className={style.progress}>
                    <h2>Status</h2>
                    <div style={{ width: 200, height: 200 }}>
                        <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
                            rotation: 0,
                            strokeLinecap: 'round',
                            textSize: '16px',
                            pathTransitionDuration: 0.5,
                            pathColor: '#8400ff',
                            textColor: '#000',
                            trailColor: '#eaeaea',
                            backgroundColor: '#3e98c7',
                        })} />
                    </div>
                </div>


                <div className={style.infoProjects}>
                    <h2>Projects</h2>
                    <div className={style.state}>
                        <div className={style.state__top}>
                            <div className={style.total}>
                                <h3>TOTAl</h3>
                                <p>144</p>
                            </div>
                            <div className={style.completed}>
                                <h3>COMPlETED</h3>
                                <p>56</p>
                            </div>
                        </div>
                        <div className={style.state__buttom}>
                            <div className={style.inProgress}>
                                <h3>IN PROGRESS</h3>
                                <p>72</p>
                            </div>
                            <div className={style.wating}>
                                <h3>WATING</h3>
                                <p>24</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RightBar;
