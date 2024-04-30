import React, {useState} from "react"
import {Link} from "react-router-dom";
import {HOME, LOG_IN} from "../../utils/consts.ts";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase.ts";

const SignIn: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let route = HOME;
    const login = () => {
        signInWithEmailAndPassword(auth, email, password)
            .catch((err)=>{
                route = LOG_IN;
                console.log(err);
                alert('Аккаунт не найден(');
            })
    }


    return (
        <div className="wrapper">
            <form>
                <h2>Войти в аккаунт</h2>
                <input onChange={e=>setEmail(e.target.value)} value={email} type="email" placeholder='почта'/>
                <input onChange={e=>setPassword(e.target.value)} value={password} type="password" placeholder='пароль'/>
                <Link to={route}><button onClick={login}>Войти</button></Link>
            </form>
        </div>
    )
}

export default SignIn;