import React from "react"
import axios from "axios";
import { setIsOpenSettingsModal } from "../../redux/slices/projectSettingsSlice.ts";
import {useAppDispatch} from "../../redux/hook.ts";
import style from "./DropDownSettings.module.scss";

const DropDownSettings: React.FC = () => {
    const dispatch = useAppDispatch();
    const [searchUser, setSearchUser] = React.useState('');
    const [foundUsers, setFoundUsers] = React.useState([]);

    // const enterAndAddUser = async (str: React.SetStateAction<string>) => {
    //     setSearchUser(str);
    //     try {
    //         const {data} = await axios.get(`https://d2e35694418f58f2.mokky.dev/users?fullName=${searchUser}`);
    //         setFoundUsers(data);
    //         console.log(foundUsers);
    //     } catch (err){
    //         alert(`Ошибка при создании задачи: ${err}`);
    //     }
    // }


    React.useEffect(()=>{
         try {
             (async()=>{
                 const {data} = await axios.get(`https://d2e35694418f58f2.mokky.dev/users?fullName=*${searchUser}`);
                 setFoundUsers(data);
             })();
         } catch (err){
             console.error(err);
         }
     }, [searchUser])

    return (
        <div className={style.wrapper}>
            <p onClick={()=>dispatch(setIsOpenSettingsModal(false))}>X</p>
            <div className={style.content}>
                <h3>Настройка проекта</h3>
                <div className={style.content__main}>
                    <div>
                        <input onChange={e => setSearchUser(e.target.value)} placeholder={"Введите имя пользователя"}/>
                        {
                            searchUser.length > 0 &&
                            <div className={style.content__main_users}>
                                {
                                    foundUsers.map((item, index) => (
                                        <div key={index}>
                                            <h4>{item.fullName}</h4>
                                            <input type={"checkbox"}/>
                                        </div>
                                    ))
                                }
                                <button>Добавить</button>
                            </div>
                        }

                    </div>

                    <div>
                        <input placeholder={"Изменить имя проекта"}/>
                        <input placeholder={"Изменить описание проекта"}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DropDownSettings;