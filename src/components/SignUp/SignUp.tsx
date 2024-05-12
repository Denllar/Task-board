import React, {useState} from "react"
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import {auth} from "../../firebase.ts";
import {Link} from "react-router-dom";
import {HOME} from "../../utils/consts.ts";
import {useAppDispatch} from "../../redux/hook.ts";
import {setCurrentEmail, setCurrentName, setUser} from "../../redux/slices/userSlice.ts";

const SignUp: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [copyPassword, setCopyPassword] = useState("");

    const dispatch = useAppDispatch();

    const register = async () => {
        if (password !== copyPassword) {
            alert("Пароли не сходятся");
            return;
        } else if (password.length < 6) {
            alert("Длина пароля не менее 6 символов");
            return;
        } else if (email.slice(email.length-10, email.length)!=="@gmail.com") {
            alert("Формат почты некорректен");
            return;
        }
        try{
            const res = await fetch("https://d2e35694418f58f2.mokky.dev/register", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fullName: name,
                    email: email,
                    password: password
                })
            })
            const data = await res.json();
            document.cookie = `${email}=${name}=${data.token}`;
            dispatch(setUser(true));
            dispatch(setCurrentName(name));
            dispatch(setCurrentEmail(email))
        } catch(err){
            alert("Аккаунт уже существует");
        }
    }


    return (
        <div className="wrapper">
            <form>
                <h2>Создание аккаунта</h2>
                <input onChange={e => setName(e.target.value)} value={name} type="name" placeholder='имя'/>
                <input onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder='почта'/>
                <input onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder='пароль'/>
                <input onChange={e => setCopyPassword(e.target.value)} value={copyPassword} type="password" placeholder='повтор пароля'/>
                <Link to={HOME}>
                    <button onClick={register}>Создать</button>
                </Link>
            </form>
        </div>
    )
}

export default SignUp;