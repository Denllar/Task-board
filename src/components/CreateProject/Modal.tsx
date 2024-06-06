import style from "./Modal.module.scss"
import {useAppDispatch, useAppSelector} from '../../redux/hook'
import {setDescriptionProj, setNameProj, setOpenModal} from "../../redux/slices/modalSlice.ts";
import axios from "axios";

const Modal = () => {
    const dispatch = useAppDispatch();
    const {nameProj, descriptionProj} = useAppSelector(state => state.modalSlice);
    const {userId} = useAppSelector(state => state.userSlice);

    const enterAndCreateProject = async () => {
        try {
            const res = await axios.post("https://d2e35694418f58f2.mokky.dev/projects", {
                user_id: userId,
                name: nameProj,
                description: descriptionProj,
                tasks: []
            });

            await axios.patch(`https://d2e35694418f58f2.mokky.dev/users/${userId}`, {
                currentProjectId: res.data.id,
            });
            dispatch(setOpenModal(false));
            dispatch(setNameProj(''));
            dispatch(setDescriptionProj(''));
        } catch (err){
            alert(`Ошибка при создании проекта: ${err}`);
        }
    }

    return (
        <div className={style.modal} onClick={() => dispatch(setOpenModal(false))}>
            <div className={style.modal__content} onClick={(e) => e.stopPropagation()}>
                <div>
                    <div>
                        <h3>Название проекта</h3>
                        <input onChange={event => dispatch(setNameProj(event.target.value))} placeholder={"Введите название"}/>
                    </div>
                    <div>
                        <h3>Описание проекта</h3>
                        <input onChange={event => dispatch(setDescriptionProj(event.target.value))} placeholder={"Введите описание"}/>
                    </div>
                </div>
                <button onClick={enterAndCreateProject}>Создать</button>
            </div>
        </div>
    )
}
export default Modal;
