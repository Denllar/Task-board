import {Link} from "react-router-dom";
import style from "./Navigation.module.scss"
import {auth} from "../../firebase.ts";
import {LOG_IN} from "../../utils/consts.ts";

const Navigation: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.main}>
        <img className={style.logo} src="" alt="logo"/>

        <nav>
          <img width={20} src="../../public/nav-img/home.png" alt="home"/>
          <img width={20} src="../../public/nav-img/user.png" alt="home"/>
          <img width={20} src="../../public/nav-img/envelope.png" alt="home"/>
          <img width={20} src="../../public/nav-img/time.png" alt="home"/>
          <img width={20} src="../../public/nav-img/list.png" alt="home"/>
          <img width={20} src="../../public/nav-img/setting.png" alt="home"/>
        </nav>

        <Link to={LOG_IN}><img onClick={()=>auth.signOut()} className={style.out} width={20} src="../../public/nav-img/out.png" alt="out"/></Link>
      </div>

    </div>
  )
}

export default Navigation;