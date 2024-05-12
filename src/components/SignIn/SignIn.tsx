import React, {useState} from "react"
import {Link} from "react-router-dom";
import {HOME} from "../../utils/consts.ts";
import {useAppDispatch} from "../../redux/hook.ts";
import {setCurrentName, setUser, setCurrentEmail} from "../../redux/slices/userSlice.ts";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import {auth} from "../../firebase.ts";

const SignIn: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useAppDispatch();

    const login = async () => {
        try {
            const res = await fetch("https://d2e35694418f58f2.mokky.dev/auth", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });
            const data = await res.json();
            const name = data.data.fullName;
            document.cookie = `${email}=${name}=${data.token}`;
            dispatch(setUser(true));
            dispatch(setCurrentName(name));
            dispatch(setCurrentEmail(email))
        } catch (err) {
            alert('Аккаунт не найден(');
        }
    }


    return (
        <div className="wrapper">
            <form>
                <h2>Войти в аккаунт</h2>
                <input onChange={e=>setEmail(e.target.value)} value={email} type="email" placeholder='почта'/>
                <input onChange={e=>setPassword(e.target.value)} value={password} type="password" placeholder='пароль'/>
                <Link to={HOME}><button onClick={login}>Войти</button></Link>
            </form>
        </div>
    )
}

export default SignIn;