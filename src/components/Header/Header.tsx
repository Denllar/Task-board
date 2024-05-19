import React from 'react'
import style from "./Header.module.scss"
import CreateProject from "../CreateProject/CreateProject.tsx";
import {useAppSelector, useAppDispatch} from "../../redux/hook.ts";
import {setToggleCreateProject} from "../../redux/slices/userSlice.ts";
import axios from "axios";

const Header = () => {
    const dispatch = useAppDispatch();
    const { toggleCreateProject, currentName, userId } = useAppSelector(state => state.userSlice);
    const {openModal} = useAppSelector(state=>state.modalSlice);
    React.useEffect(()=>{
        try {
            (async ()=> {
                const {data} = await axios(`https://d2e35694418f58f2.mokky.dev/projects?user_id=${userId}`);
                if (data.length>0) {
                    dispatch(setToggleCreateProject(false));
                }
            })()
        } catch (err){
            console.log(err);
        }
    }, [openModal])


    return (
        <div className={style.wrapper}>
            {
                toggleCreateProject ? <CreateProject/> :
                    <div className={style.left}>
                        <img className={style.menu} width={20} src="./public/menu.png" alt="menu"/>
                        <div className={style.search}>
                            <img width={20} src='../../public/magnifier.png' alt='magnifier'/>
                            <input placeholder='Search'/>
                        </div>
                    </div>
            }

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