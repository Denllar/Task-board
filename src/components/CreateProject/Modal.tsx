import style from "./Modal.module.scss"
import {useAppDispatch, useAppSelector} from '../../redux/hook'
import {setDescription, setName, setOpenModal} from "../../redux/slices/modalSlice.ts";
import axios from "axios";


const Modal = () => {
    const dispatch = useAppDispatch();
    const {nameProj, descriptionProj} = useAppSelector(state => state.modalSlice);
    const {userId} = useAppSelector(state => state.userSlice);

    const enterAndCreateProject = async () => {
        try {
            //Отправляем на создание
            await axios.post("https://d2e35694418f58f2.mokky.dev/projects", {
                user_id: userId,
                name: nameProj,
                description: descriptionProj,
                tasks: []
            });
            //Получаем ID
            const {data} = await axios(`https://d2e35694418f58f2.mokky.dev/projects?name=${nameProj}`);
            //Отправляем полученное ID уже в пользователя
            await axios.patch(`https://d2e35694418f58f2.mokky.dev/users/${userId}`, {
                currentProjectId: data.id
            });

        } catch (err){
            alert(`Ошибка при создании проекта: ${err}`);
        }
        dispatch(setOpenModal(false));
        dispatch(setName(""));
        dispatch(setDescription(""));
    }


    return (
        <div className={style.modal} onClick={() => dispatch(setOpenModal(false))}>
            <div className={style.modal__content} onClick={(e) => e.stopPropagation()}>
                <div>
                    <div>
                        <h3>Название проекта</h3>
                        <input onChange={event => dispatch(setName(event.target.value))} value={nameProj} placeholder={"Введите название"}/>
                    </div>
                    <div>
                        <h3>Описание проекта</h3>
                        <input onChange={event => dispatch(setDescription(event.target.value))} value={descriptionProj} placeholder={"Введите описание"}/>
                    </div>
                </div>
                <button onClick={enterAndCreateProject}>Создать</button>
            </div>
        </div>
    )
}
export default Modal;
