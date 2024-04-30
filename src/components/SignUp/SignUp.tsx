import React, {useState} from "react"
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase.ts";
import {Link} from "react-router-dom";
import {HOME} from "../../utils/consts.ts";

const SignUp: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [copyPassword, setCopyPassword] = useState("");

    const register = () => {
        if (password !== copyPassword) {
            alert("Пароли не сходятся");
            return;
        } else if (password.length < 6) {
            alert("Длина пароля не менее 6 символов");
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .catch((err)=>{
                console.log(err);
                alert('Аккаунт уже существует либо некорректен формат почты');
            })
    }


    return (
        <div className="wrapper">
            <form>
                <h2>Создание аккаунта</h2>
                <input onChange={e=>setEmail(e.target.value)} value={email} type="email" placeholder='почта'/>
                <input onChange={e=>setPassword(e.target.value)} value={password} type="password" placeholder='пароль'/>
                <input onChange={e=>setCopyPassword(e.target.value)} value={copyPassword} type="password" placeholder='повтор пароля'/>
                <Link to={HOME}><button onClick={register}>Создать</button></Link>
            </form>
        </div>
    )
}

export default SignUp;