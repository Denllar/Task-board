import React, {useState} from "react"
import {Link} from "react-router-dom";
import {HOME} from "../../utils/consts.ts";
import {useAppDispatch} from "../../redux/hook.ts";
import {setCurrentName, setUser} from "../../redux/slices/userSlice.ts";
import axios from "axios";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import {auth} from "../../firebase.ts";

const SignIn: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useAppDispatch();
    const login = async () => {
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

        console.log(res)
        if (res.status === 201) {
            const data = await axios(`https://d2e35694418f58f2.mokky.dev/users?email=${email}`);
            dispatch(setUser(true));
            dispatch(setCurrentName(data.data[0].fullName));
        } else {
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