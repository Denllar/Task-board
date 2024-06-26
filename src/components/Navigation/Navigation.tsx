import {Link} from "react-router-dom";
import style from "./Navigation.module.scss"
import {LOG_IN} from "../../utils/consts.ts";
import {useAppDispatch, useAppSelector} from "../../redux/hook.ts";
import {setCurrentEmail, setCurrentName, setToggleCreateProject, setToggleSignUp, setCurrentProjectId} from "../../redux/slices/userSlice.ts";
import {setNameProj, setDescriptionProj} from "../../redux/slices/modalSlice.ts";

const Navigation: React.FC = () => {
  const dispatch = useAppDispatch();
  const {currentEmail} = useAppSelector(state=>state.userSlice);
  const logOut = ()=>{
    document.cookie = `${currentEmail}=; Max-Age=-99999999;`;
    dispatch(setToggleSignUp(false));
    dispatch(setCurrentName(''));
    dispatch(setCurrentEmail(''));
    dispatch(setToggleCreateProject(true));
    dispatch(setCurrentProjectId(null));

    dispatch(setNameProj(''));
    dispatch(setDescriptionProj(''));
  }

  return (
    <div className={style.wrapper}>
      <div className={style.main}>
        <h2>Task<br/>Board</h2>

        <nav>
          <img width={20} src="../../public/nav-img/home.png" alt="home"/>
          <img width={20} src="../../public/nav-img/user.png" alt="home"/>
          <img width={20} src="../../public/nav-img/envelope.png" alt="home"/>
          <img width={20} src="../../public/nav-img/time.png" alt="home"/>
          <img width={20} src="../../public/nav-img/list.png" alt="home"/>
          <img width={20} src="../../public/nav-img/setting.png" alt="home"/>
        </nav>

        <Link to={LOG_IN}><img onClick={logOut} className={style.out} width={20} src="../../public/nav-img/out.png" alt="out"/></Link>
      </div>

    </div>
  )
}

export default Navigation;