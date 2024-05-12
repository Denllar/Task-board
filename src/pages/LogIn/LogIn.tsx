import React from 'react'
import SignUp from "../../components/SignUp/SignUp.tsx";
import SignIn from "../../components/SignIn/SignIn.tsx";
import {useAppDispatch} from "../../redux/hook.ts";
import {setCurrentEmail, setCurrentName, setUser} from "../../redux/slices/userSlice.ts";

const LogIn: React.FC = () => {
    const [toggleSign, setToggleSign] = React.useState(true);

    const dispatch = useAppDispatch();
    React.useEffect( ()=>{
        if (document.cookie){
            const loggedInCookieArr = document.cookie.split('=');
            dispatch(setUser(true));
            dispatch(setCurrentName(loggedInCookieArr[1]));
            dispatch(setCurrentEmail(loggedInCookieArr[0]));
        }
    }, [])

    return (
        <div>
            {
                toggleSign ? <h2>Уже есть аккаунт? <span onClick={() => setToggleSign(prev => !prev)}>Войти</span></h2> :
                    <h2>Нет аккаунта? <span onClick={() => setToggleSign(prev => !prev)}>Создать</span></h2>
            }
            {
                toggleSign ? <SignUp/> : <SignIn/>
            }
        </div>
  )
}

export default LogIn;