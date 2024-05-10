import style from "./Header.module.scss"
import {useAppSelector} from "../../redux/hook.ts";
// import {auth} from "../../firebase.ts";
// import {useAuthState} from "react-firebase-hooks/auth";

const Header = () => {
    const {currentName} = useAppSelector(state => state.userSlice);
    return (
        <div className={style.wrapper}>
            <div className={style.left}>
                <img className={style.menu} width={20} src="./public/menu.png" alt="menu"/>
                <div className={style.search}>
                    <img width={20} src='../../public/magnifier.png' alt='magnifier'/>
                    <input placeholder='Search'></input>
                </div>
            </div>
            <div className={style.right}>
                <img width={20} src="./public/notification.png" alt="notification"/>
                <img width={20} src="./public/calendar.png" alt="calendar"/>
                <span>|</span>
                <div className={style.user}>
                    <img width={20} src="./public/avatar.png" alt="avatar"/>
                    <span>{currentName} <span>⌵</span></span>
                </div>
            </div>
        </div>
  )
}

export default Header